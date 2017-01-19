import { combineReducers } from 'redux';

import StylesReducer from './styles_reducer';
import DatesReducer from './dates_reducer';

export default combineReducers({
  styles: StylesReducer,
  dates: DatesReducer,
});
