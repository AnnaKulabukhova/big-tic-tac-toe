import { Link } from '../../shared/ui/Link';
import {
  GAME,
  PARAMETERS,
  LEADERBOARD,
} from '../../entities/routesSlice/constants/paths';
import styles from './MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Link path={GAME}>Новая игра</Link>
      <Link path={PARAMETERS}>Параметры</Link>
      <Link path={LEADERBOARD}>Таблица лидеров</Link>
    </div>
  );
};
