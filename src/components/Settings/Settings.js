import { useState, useContext } from 'react';
import { Select } from '../Select';
import { Button } from '../Button';
import { SettingsContext } from '../Context/SettingsContext';
import { mapSize } from '../../constants/settings';
import { numberOfSymbols } from '../../constants/settings';
import { MAP, QTY_SYMBOLS } from '../../constants/settings';
import { convertMapSize } from '../../helpers/convertMapSize';
import { convertQtySymbols } from '../../helpers/convertQtySymbols';
import styles from './Settings.module.css';

export const Settings = () => {
  const { settings, redactSettings } = useContext(SettingsContext);
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
      redactSettings({
        ...settings,
        [MAP]: {
          ...settings[MAP],
          option: form[MAP].option,
        },
        [QTY_SYMBOLS]: {
          ...settings[QTY_SYMBOLS],
          option: form[QTY_SYMBOLS].option,
        },
      });
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
