import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Player } from '../../entities/ui/Player';
import { playersNameAdded } from '../../entities/playersSlice';
import styles from './PlayerParameters.module.css';

export const PlayerParameters = () => {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const [isIdenticalName, setIsIdenticalName] = useState(false);

  const handleChangeName = (player) => (name) => {
    const isDuplicatedName = Object.entries(players).some(([key, value]) => {
      if (key === player) {
        return false;
      }
      return name === value.name;
    });

    if (isDuplicatedName) {
      setIsIdenticalName(true);
      return;
    }

    dispatch(playersNameAdded({ playerNumber: player, playerName: name }));
    setIsIdenticalName(false);
  };

  return (
    <div className={styles.wrapper}>
      {Object.keys(players).map((player, index) => (
        <Player
          key={index}
          number={index + 1}
          name={players[player].name}
          changePlayerName={handleChangeName(player)}
        />
      ))}
      <div>{isIdenticalName && 'Измените имя'}</div>
    </div>
  );
};
