import { createSlice } from '@reduxjs/toolkit';
import { FIRST_PLAYER, SECOND_PLAYER } from './constants/players';

const initialState = {
  [FIRST_PLAYER]: {
    name: 'Игрок 1',
  },
  [SECOND_PLAYER]: {
    name: 'Игрок 2',
  },
};

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    playersNameAdded(state, action) {
      const { playerNumber, playerName } = action.payload;
      Object.entries(state).find((player) =>
        player[0] === playerNumber ? (player[1].name = playerName) : ''
      );
    },
  },
});

export const { playersNameAdded } = playersSlice.actions;
