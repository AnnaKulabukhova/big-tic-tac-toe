import { createSlice } from '@reduxjs/toolkit';
import {
  MAP,
  QTY_SYMBOLS,
  mapSize,
  numberOfSymbols,
} from './constants/settings';

const initialState = {
  [MAP]: {
    option: mapSize[0],
  },
  [QTY_SYMBOLS]: {
    option: numberOfSymbols[0],
  },
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    editSettings(state, action) {
      state[MAP].option = action.payload[MAP].option;
      state[QTY_SYMBOLS].option = action.payload[QTY_SYMBOLS].option;
    },
  },
});

export const { editSettings } = settingsSlice.actions;
