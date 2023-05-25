import { useState } from 'react';
import { PlayersContext } from './PlayersContext';
import { FIRST_PLAYER, SECOND_PLAYER } from '../../../constants/players';

export const PlayersContextProvider = ({ children }) => {
  const [playerName, setPlayerName] = useState('');
  return (
    <PlayersContext.Provider
      value={{
        players: {
          [FIRST_PLAYER]: {
            name: playerName,
          },
          [SECOND_PLAYER]: {
            name: playerName,
          },
        },
        changePlayerName: setPlayerName,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};
