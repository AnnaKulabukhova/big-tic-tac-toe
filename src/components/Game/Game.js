import { useContext, useState } from 'react';
import { GameGrid } from '../GameGrid/GameGrid';
import { Link } from '../Link';
import { Button } from '../Button';
import { PlayersContext } from '../Context/PlayersContext';
import { FIRST_PLAYER, SECOND_PLAYER } from '../../constants/players';
import styles from './Game.module.css';

export const Game = () => {
  const { players } = useContext(PlayersContext);
  const [isEndGame, setIsEndGame] = useState(false);
  const [newGame, setNewGame] = useState(false);
  // const [isActivePlayer, setIsActivePlayer] = useState(true);

  const handleUpdateMap = () => {
    setNewGame(!newGame);
  };

  const endedGame = () => {
    setIsEndGame(!isEndGame);
  };
  return (
    <div>
      <div className={styles.f}>
        <div className={styles.button}>
          <Link path="/">Главное меню</Link>
        </div>
        {isEndGame && (
          <div className={styles.button}>
            <Button onClick={handleUpdateMap}>Начать заново</Button>
          </div>
        )}
      </div>
      <div className={styles.containerInner}>
        <GameGrid
          sizeX={5}
          sizeY={5}
          endGame={endedGame}
          newGame={newGame}
          setNewGame={setNewGame}
        />

        <div>
          <span className={styles.namePlayer}>
            {players[FIRST_PLAYER].name}
          </span>
          <span className={styles.namePlayer}>
            {players[SECOND_PLAYER].name}
          </span>
        </div>
      </div>
    </div>
  );
};
