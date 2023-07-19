import { Link } from '../Link';
import { NEW_GAME, PARAMETERS, LEADERBOARD } from '../../constants/paths';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Link path={NEW_GAME}>Новая игра</Link>
      <Link path={PARAMETERS}>Параметры</Link>
      <Link path={LEADERBOARD}>Таблица лидеров</Link>
    </div>
  );
};
