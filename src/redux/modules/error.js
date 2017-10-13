import { FETCH_ERROR } from './fetch';

const initialState = {};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ERROR:
      return { ...initialState, error: action.err, info: action.info };
    default:
      return state;
  }
}
