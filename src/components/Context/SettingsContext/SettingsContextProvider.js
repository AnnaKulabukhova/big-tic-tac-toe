import { useState } from 'react';
import { SettingsContext } from './SettingsContext';
import {
  MAP,
  QTY_SYMBOLS,
  mapSize,
  numberOfSymbols,
} from '../../../constants/settings';

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState(initialSettings);

  return (
    <SettingsContext.Provider value={{ settings, redactSettings: setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

const initialSettings = {
  [MAP]: {
    option: mapSize[0],
  },
  [QTY_SYMBOLS]: {
    option: numberOfSymbols[0],
  },
};
