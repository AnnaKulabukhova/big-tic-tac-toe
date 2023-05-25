import { useState } from 'react';
import { Select } from '../Select';
import { InputMapSize } from '../InputMapSize';
import { mapSize } from '../../constants/settings';
import { numberOfSymbols } from '../../constants/settings';
import styles from './Settings.module.css';

export const Settings = () => {
  const [sizeMap, setSizeMap] = useState(mapSize[0]);
  const [qtySymbols, setQtySymbols] = useState(numberOfSymbols[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const f = (newSize) => {
    console.log(newSize);
    setSizeMap(newSize);
  };

  const changeSelectMap = (element) => {
    setSizeMap(element);
  };

  const changeSelectSymbols = (element) => {
    setQtySymbols(element);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Размер поля</h1>
          <Select
            activeElement={sizeMap}
            list={mapSize}
            changeSelect={changeSelectMap}
          />
          {sizeMap === 'Другое' && <InputMapSize newSize={f} />}
        </div>
        <div className={styles.inner}>
          <h1 className={styles.title}>Количество символов для победы</h1>
          <Select
            activeElement={qtySymbols}
            list={numberOfSymbols}
            changeSelect={changeSelectSymbols}
          />
        </div>
        <button className={styles.buttonSave} type="submit">
          Сохранить
        </button>
      </form>
    </>
  );
};
