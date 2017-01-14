import { combineReducers } from 'redux';

import StylesReducer from './styles_reducer';

export default combineReducers({
  styles: StylesReducer,
});
