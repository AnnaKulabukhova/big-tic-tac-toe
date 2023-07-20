import { useState } from 'react';
import styles from './Select.module.css';
import buttonOpen from '../../images/buttonOpen.svg';

export const Select = ({ activeElement, list, changeSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSizeSelect = (option) => {
    changeSelect(option);
    setIsOpen(!isOpen);
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
