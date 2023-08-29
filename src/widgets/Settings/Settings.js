import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from '../../shared/ui/Select';
import { Button } from '../../shared/ui/Button';
import { editSettings } from '../../entities/settingsSlice';
import {
  mapSize,
  numberOfSymbols,
  MAP,
  QTY_SYMBOLS,
} from '../../entities/settingsSlice/constants/settings';
import { convertMapSize } from '../../features/convert/convertMapSize';
import { convertQtySymbols } from '../../features/convert/convertQtySymbols';
import styles from './Settings.module.css';

export const Settings = () => {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const [form, setForm] = useState(settings);

  const handleSaveSettings = (setting) => (option) => {
    setForm((currentFormValue) => ({
      ...currentFormValue,
      [setting]: {
        option,
      },
    }));
  };

  const qtySymbol = convertQtySymbols(form[QTY_SYMBOLS].option);
  const sizeOfMap = convertMapSize(form[MAP].option);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sizeOfMap.sizeX > qtySymbol && sizeOfMap.sizeY > qtySymbol) {
      dispatch(editSettings(form));
    }
  };

  const formFields = [
    {
      name: MAP,
      title: 'Размер поля',
      list: mapSize,
    },
    {
      name: QTY_SYMBOLS,
      title: 'Количество символов для победы',
      list: numberOfSymbols,
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => {
          return (
            <div className={styles.inner} key={field.name}>
              <h1 className={styles.title}>{field.title}</h1>
              <Select
                activeElement={form[field.name].option}
                list={field.list}
                saveSelect={handleSaveSettings(field.name)}
              />
            </div>
          );
        })}
        <Button className={styles.buttonSave} type="submit">
          Сохранить
        </Button>
        {qtySymbol > sizeOfMap && (
          <div className={styles.warning}>
            Размер поля не может быть меньше выбранного количества символов
          </div>
        )}
      </form>
    </>
  );
};
