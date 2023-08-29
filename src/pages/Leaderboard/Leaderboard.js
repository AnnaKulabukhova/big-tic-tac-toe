import { useSelector } from 'react-redux';
import { Link } from '../../shared/ui/Link';
import { MAIN_MENU } from '../../entities/routesSlice/constants/paths';
import { sortLeaderboard } from '../../features/leaderboard/sortedLeaderboard';
import { titleColumn } from '../../entities/leaderboardSlice/constants/titleColumn';
import styles from './Leaderboard.module.css';

export const Leaderboard = () => {
  const leaders = useSelector((state) => state.leaderboard);
  const sortedLeaderboard = sortLeaderboard(leaders);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Таблица лидеров</h1>
      <div className={styles.table}>
        <table className={styles.table}>
          <thead>
            <tr>
              {titleColumn.map((title, index) => (
                <th key={index} className={styles.titleColumn}>
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedLeaderboard.map((player) => (
              <tr key={player.name}>
                <td className={styles.cell}>{player.name}</td>
                <td className={styles.cell}>{player.numberOfGame}</td>
                <td className={styles.cell}>{player.numberOfWins}</td>
                <td className={styles.cell}>{player.numberOfDefeats}</td>
                <td className={styles.cell}>{player.percentageOfWins}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.button}>
        <Link path={MAIN_MENU}>Назад</Link>
      </div>
    </div>
  );
};
