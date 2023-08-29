import { createSlice } from '@reduxjs/toolkit';
import { leaderboard } from './constants/leaderboard';

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: leaderboard,
  reducers: {
    editLeaderboard(state, action) {
      return action.payload;
    },
  },
});

export const { editLeaderboard } = leaderboardSlice.actions;
