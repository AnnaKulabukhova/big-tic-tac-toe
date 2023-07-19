import { useContext } from 'react';
import { Link } from '../Link';
import { LeaderboardContext } from '../Context/LeaderboardContext';
import { MAIN_MENU } from '../../constants/paths';
import { sortLeaderboard } from '../../helpers/sortedLeaderboard';
import styles from './Leaderboard.module.css';

export const Leaderboard = () => {
  const { leaders } = useContext(LeaderboardContext);
  const sortedLeaderboard = sortLeaderboard(leaders);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Таблица лидеров</h1>
      <div className={styles.table}>
        <div className={styles.column}>
          <h2 className={styles.titleColumn}>Имя игрока</h2>
          <ul className={styles.list}>
            {sortedLeaderboard.map((player) => (
              <li className={styles.item} key={player.name}>
                {player.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.titleColumn}>Количество игр</h2>
          <ul className={styles.list}>
            {sortedLeaderboard.map((player) => (
              <li className={styles.item} key={player.name}>
                {player.numberOfGame}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.titleColumn}>Количество побед</h2>
          <ul className={styles.list}>
            {sortedLeaderboard.map((player) => (
              <li className={styles.item} key={player.name}>
                {player.numberOfWins}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.titleColumn}>Количество поражений</h2>
          <ul className={styles.list}>
            {sortedLeaderboard.map((player) => (
              <li className={styles.item} key={player.name}>
                {player.numberOfDefeats}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h2 className={styles.titleColumn}>Процент побед</h2>
          <ul className={styles.list}>
            {sortedLeaderboard.map((player) => (
              <li className={styles.item} key={player.name}>
                {player.percentageOfWins}%
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.button}>
        <Link path={MAIN_MENU}>Назад</Link>
      </div>
    </div>
  );
};
