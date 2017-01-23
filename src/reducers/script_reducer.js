import { GENERATE_SCRIPT, CELLS_RESET } from '../actions';
import { generateScript } from '../script_generator';

const INITIAL_STATE = '';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GENERATE_SCRIPT:
      return generateScript(action.payload.dates, action.payload.styles);
    case CELLS_RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
}
