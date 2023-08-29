import {
  FIRST_PLAYER,
  SECOND_PLAYER,
} from '../../playersSlice/constants/players';

export const playersQueue = {
  [FIRST_PLAYER]: {
    next: SECOND_PLAYER,
  },
  [SECOND_PLAYER]: {
    next: FIRST_PLAYER,
  },
};
