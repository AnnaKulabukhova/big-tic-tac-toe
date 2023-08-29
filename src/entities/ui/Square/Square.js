import styles from './Square.module.css';

export const Square = ({ value, onSquareClick }) => {
  return (
    <button className={styles.Square} onClick={onSquareClick}>
      {value}
    </button>
  );
};
