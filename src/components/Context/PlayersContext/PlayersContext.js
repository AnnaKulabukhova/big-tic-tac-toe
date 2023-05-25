import { createContext } from 'react';
import { FIRST_PLAYER, SECOND_PLAYER } from '../../../constants/players';

export const PlayersContext = createContext({
  players: {
    [FIRST_PLAYER]: {
      name: '',
    },
    [SECOND_PLAYER]: {
      name: '',
    },
  },
  changePlayerName: () => {},
});
