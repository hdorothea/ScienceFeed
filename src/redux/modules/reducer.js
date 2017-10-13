
import { combineReducers } from 'redux';

import articles from './articles';
import filter from './filter';
import fetch from './fetch';
import error from './error';

export default combineReducers({
  articles,
  filter,
  fetch,
  error,
});

