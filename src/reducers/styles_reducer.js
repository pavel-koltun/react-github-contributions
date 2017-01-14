import { CELL_CLICK, CELLS_RESET } from '../actions';

const INITIAL_STATE = {};

// 5 levels: from 1 to 5. Used for styling cells.
const nextStyleIndex = (current) => {
  if (!current) {
    return 2;
  }
  return current < 5 ? (current + 1) : 1;
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CELL_CLICK:
      return { ...state, [action.payload]: nextStyleIndex(state[action.payload]) };
    case CELLS_RESET:
      return {};
    default:
      return state;
  }
}
