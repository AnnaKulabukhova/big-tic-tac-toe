import { useReducer } from 'react';
import { FIRST_PLAYER, SECOND_PLAYER } from '../../../constants/players';
import { PlayersContext, PlayersDispatchContext } from './PlayersContext';

export const PlayersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playerReducer, initial);

  return (
    <PlayersContext.Provider value={state}>
      <PlayersDispatchContext.Provider value={dispatch}>
        {children}
      </PlayersDispatchContext.Provider>
    </PlayersContext.Provider>
  );
};

const playerReducer = (state, action) => ({
  ...state,
  [action.type]: {
    ...state[action.type],
    name: action.payload,
  },
});

const initial = {
  [FIRST_PLAYER]: {
    name: '',
  },
  [SECOND_PLAYER]: {
    name: '',
  },
};
