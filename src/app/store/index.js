import { configureStore } from '@reduxjs/toolkit';
import { leaderboardSlice } from '../../entities/leaderboardSlice';
import { playersSlice } from '../../entities/playersSlice/playersSlice';
import { settingsSlice } from '../../entities/settingsSlice/settingsSlice';

export const store = configureStore({
  reducer: {
    leaderboard: leaderboardSlice.reducer,
    players: playersSlice.reducer,
    settings: settingsSlice.reducer,
  },
});
