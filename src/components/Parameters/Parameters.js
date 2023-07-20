import { Outlet } from 'react-router-dom';
import { parameters } from '../../constants/parameters';
import { Link } from '../Link';
import styles from './Parameters.module.css';

export const Parameters = () => {
  return (
    <>
      <h1 className={styles.title}>Параметры</h1>
      <div className={styles.wrapper}>
        <div className={styles.listOfParameters}>
          {parameters.map(({ title, path }) => {
            return (
              <div key={path} className={styles.link}>
                <Link path={path}>{title}</Link>
              </div>
            );
          })}
        </div>
        <Outlet />
      </div>
    </>
  );
};
