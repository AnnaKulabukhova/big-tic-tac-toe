import { useContext } from 'react';
import { Player } from '../Player';
import styles from './PlayerParameters.module.css';
import { FIRST_PLAYER, SECOND_PLAYER } from '../../constants/players';
import { PlayersContext } from '../Context/PlayersContext';

export const PlayerParameters = () => {
  // const { players } = useContext(PlayersContext);
  return (
    <div className={styles.wrapper}>
      <Player number="1" name={[FIRST_PLAYER].name} />
      <Player number="2" name={[SECOND_PLAYER].name} />
    </div>
  );
};
