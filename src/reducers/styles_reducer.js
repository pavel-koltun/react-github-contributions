import _ from 'lodash';

import { CELL_CLICK, CELLS_RESET } from '../actions';

const INITIAL_STATE = {};

const getNextStyleIndex = (current = 1) => current < 5 ? (current + 1) : null;

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case CELL_CLICK: {
      const nextStyleIndex = getNextStyleIndex(state[action.payload]);
      return nextStyleIndex ? { ...state, [action.payload]: nextStyleIndex }
        : _.omitBy(state, (v, k) => k === action.payload);
    }
    case CELLS_RESET:
      return {};
    default:
      return state;
  }
}
