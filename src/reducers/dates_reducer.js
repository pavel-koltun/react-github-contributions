import { generateDatesRangeInYear } from '../dates_generator';

const INITIAL_STATE = generateDatesRangeInYear(2016, {
  complete: true,
});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
