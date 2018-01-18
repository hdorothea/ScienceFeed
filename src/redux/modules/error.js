import { FETCH_ERROR } from './fetch';

const initialState = {
  errors: []
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ERROR:
      return {
        ...state,
        errors: [
          ...state.errors,
          { error: action.err.message, stack: action.err.stack, info: action.info }
        ]
      };
    default:
      return state;
  }
}
