import { generateDatesRangeInYear } from '../dates_generator';

const INITIAL_STATE = generateDatesRangeInYear(2016);

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
