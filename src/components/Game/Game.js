import { useContext, useState } from 'react';
import { GameGrid } from '../GameGrid';
import { Link } from '../Link';
import { Button } from '../Button';
import { PlayersContext } from '../Context/PlayersContext';
import { SettingsContext } from '../Context/SettingsContext';
import { LeaderboardContext } from '../Context/LeaderboardContext';
import { FIRST_PLAYER } from '../../constants/players';
import { MAIN_MENU } from '../../constants/paths';
import { MAP, QTY_SYMBOLS } from '../../constants/settings';
import { convertMapSize } from '../../helpers/convertMapSize';
import { changeLeaderboard } from '../../helpers/changeLeaderboard';
import { startNewGame } from '../../helpers/startNewGame';
import { buildGrid } from '../../helpers/buildGrid';
import styles from './Game.module.css';

export const Game = () => {
  const { settings } = useContext(SettingsContext);
  const [isNewGame, setIsNewGame] = useState(false);
  const [activePlayer, setActivePlayer] = useState(FIRST_PLAYER);
  const [winner, setWinner] = useState(null);
  const [isFirstPlayer, setIsFirstPlayer] = useState(true);
  const numberOfColAndRow = convertMapSize(settings[MAP].option);
  const [grid, setGrid] = useState(() =>
    buildGrid(numberOfColAndRow, numberOfColAndRow)
  );
  const players = useContext(PlayersContext);
  const { leaders } = useContext(LeaderboardContext);
  const { redactLeaders } = useContext(LeaderboardContext);

  const handleUpdateMap = () => {
    startNewGame(
      setGrid,
      setIsFirstPlayer,
      setActivePlayer,
      numberOfColAndRow,
      numberOfColAndRow
    );
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

    redactLeaders(changeLeaderboard(lastGamePlayers, leaders));
  };

  return (
    <div>
      <div className={styles.containerButton}>
        <div className={styles.button}>
          <Link path={MAIN_MENU}>Главное меню</Link>
        </div>
        {isNewGame && (
          <div className={styles.button}>
            <Button onClick={handleUpdateMap}>Начать заново</Button>
          </div>
        )}
      </div>
      <div className={styles.containerInner}>
        <GameGrid
          sizeX={numberOfColAndRow}
          sizeY={numberOfColAndRow}
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
