import { useState } from 'react';
import buttonOpen from '../../images/buttonOpen.svg';
import styles from './Select.module.css';

export const Select = ({ activeElement, list, saveSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSizeSelect = (option) => {
    setIsOpen(!isOpen);
    saveSelect(option);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.select}>
        <div>{activeElement}</div>
        <button
          className={styles.buttonOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={buttonOpen} alt="Показать варианты" />
        </button>
      </div>
      <div>
        {isOpen &&
          list.map((option) => {
            return (
              <button
                className={styles.option}
                key={option}
                onClick={() => {
                  handleSizeSelect(option);
                }}
              >
                {option}
              </button>
            );
          })}
      </div>
    </div>
  );
};
