import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameGrid } from '../../widgets/GameGrid';
import { Link } from '../../shared/ui/Link';
import { Button } from '../../shared/ui/Button';
import { FIRST_PLAYER } from '../../entities/playersSlice/constants/players';
import { MAIN_MENU } from '../../entities/routesSlice/constants/paths';
import {
  MAP,
  QTY_SYMBOLS,
} from '../../entities/settingsSlice/constants/settings';
import { convertMapSize } from '../../features/convert/convertMapSize';
import { changeLeaderboard } from '../../features/game/changeLeaderboard';
import { buildGrid } from '../../features/game/buildGrid';
import { editLeaderboard } from '../../entities/leaderboardSlice';
import styles from './Game.module.css';

export const Game = () => {
  const settings = useSelector((state) => state.settings);
  const [isNewGame, setIsNewGame] = useState(false);
  const [activePlayer, setActivePlayer] = useState(FIRST_PLAYER);
  const [winner, setWinner] = useState(null);
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const sizeOfMap = convertMapSize(settings[MAP].option);
  const initialGrid = useMemo(
    () => buildGrid(sizeOfMap.sizeX, sizeOfMap.sizeY),
    [sizeOfMap]
  );
  const [grid, setGrid] = useState(initialGrid);
  const leaders = useSelector((state) => state.leaderboard);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();

  const startNewGame = () => {
    setGrid(initialGrid);
    setIsFirstPlayer(true);
    setActivePlayer(FIRST_PLAYER);
    setWinner(null);
    setIsNewGame((value) => !value);
  };

  const endGame = () => {
    setIsNewGame((value) => !value);

    const lastGamePlayers = Object.entries(players).reduce(
      (acc, [key, value]) => {
        acc[value.name] = { isWinner: activePlayer === key };
        return acc;
      },
      {}
    );

    dispatch(editLeaderboard(changeLeaderboard(lastGamePlayers, leaders)));
  };

  return (
    <div>
      <div className={styles.containerButton}>
        <div className={styles.button}>
          <Link path={MAIN_MENU}>Главное меню</Link>
        </div>
        {isNewGame && (
          <div className={styles.button}>
            <Button onClick={startNewGame}>Начать заново</Button>
          </div>
        )}
      </div>
      <div className={styles.containerInner}>
        <GameGrid
          endGame={endGame}
          activePlayer={activePlayer}
          setActivePlayer={setActivePlayer}
          qtySymbols={settings[QTY_SYMBOLS].option}
          setWinner={setWinner}
          grid={grid}
          setGrid={setGrid}
          isFirstPlayer={isFirstPlayer}
          setIsFirstPlayer={setIsFirstPlayer}
        />

        <div>
          {Object.entries(players).map(([playerId, playerInfo]) => {
            const isWinnerClassName =
              playerInfo.name === winner ? styles.winner : '';
            const activePlayerClassName =
              activePlayer === playerId ? styles.activePlayer : '';
            return (
              <span
                key={playerId}
                className={`${styles.playerName} ${activePlayerClassName} ${isWinnerClassName}`}
              >
                {playerInfo.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
