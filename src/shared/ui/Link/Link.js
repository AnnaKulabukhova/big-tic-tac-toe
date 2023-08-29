import { Link as RouterLink } from 'react-router-dom';
import styles from './Link.module.css';

export const Link = ({ children, path }) => {
  return (
    <RouterLink to={path} className={styles.link}>
      {children}
    </RouterLink>
  );
};
