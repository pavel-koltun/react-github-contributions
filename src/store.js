import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';
import moment from 'moment';

import reducers from './reducers';

const config = {
  key: 'react-github-contributions',
  deserialize: (persistedState) => {
    let state = JSON.parse(persistedState);

    if (state && state.dates) {
      state = { ...state, dates: state.dates.map(d => moment(d)) };
    }

    return state;
  },
};

const enhancer = compose(persistState(null, config));

export default createStore(reducers, enhancer);
