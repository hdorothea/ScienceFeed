import { FETCH_ERROR } from '../data';

const initialState = [];
export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ERROR:
      return [...state, action.err];
    default:
      return state;
  }
}
