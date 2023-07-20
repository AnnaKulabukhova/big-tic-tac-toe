import { useState } from 'react';
import styles from './InputMapSize.module.css';

export const InputMapSize = ({ newSize }) => {
  const [size, setSize] = useState('');

  const handleInputSize = (e) => {
    setSize(e.target.value);
    newSize(size);
  };

  return (
    <div className={styles.form}>
      <input
        placeholder="Введите размер поля"
        className={styles.input}
        value={size}
        onChange={handleInputSize}
      />
    </div>
  );
};
