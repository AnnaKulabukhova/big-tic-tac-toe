import { LeaderboardContext } from './LeaderboardContext';
import { leaderboard } from '../../../constants/leaderboard';
import { useState } from 'react';

export const LeaderboardContextProvider = ({ children }) => {
  const [leaders, setLeaders] = useState(leaderboard);
  return (
    <LeaderboardContext.Provider value={{ leaders, editLeaders: setLeaders }}>
      {children}
    </LeaderboardContext.Provider>
  );
};
