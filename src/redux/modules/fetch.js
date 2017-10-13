import { RECEIVE_ARTICLES } from './articles';

export const FETCH_START = 'science-feed/fetch/START';
export const FETCH_ERROR = 'science-feed/fetch/Error';

const initialState = { isFetching: false };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return { ...state, isFetching: true };
    case RECEIVE_ARTICLES:
      return { ...state, isFetching: false };
    case FETCH_ERROR:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}

export function startFetch() {
  return {
    type: FETCH_START,
  };
}

export function errFetch(err) {
  return {
    type: FETCH_ERROR,
    info: 'Error while fetching articles',
    err,
  };
}
