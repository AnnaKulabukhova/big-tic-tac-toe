import { Link } from '../Link/Link';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Link path="newGame">Новая игра</Link>
      <Link path="parameters">Параметры</Link>
      <Link path="leaderboard">Таблица лидеров</Link>
    </div>
  );
};
