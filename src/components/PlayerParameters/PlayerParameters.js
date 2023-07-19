import { useContext } from 'react';
import { Player } from '../Player';
import { PlayersContext } from '../Context/PlayersContext';
import { PlayersDispatchContext } from '../Context/PlayersContext';
import { playersList } from '../../constants/players';
import styles from './PlayerParameters.module.css';

export const PlayerParameters = () => {
  const dispatch = useContext(PlayersDispatchContext);
  const players = useContext(PlayersContext);

  const handleChangeName = (player) => (name) => {
    dispatch({
      type: player,
      payload: name,
    });
  };

  return (
    <div className={styles.wrapper}>
      {playersList.map((player, index) => (
        <Player
          key={index}
          number={index + 1}
          name={players[player].name}
          changePlayerName={handleChangeName(player)}
        />
      ))}
    </div>
  );
};
