export const UPDATE_QUERY_STRING = 'science-feed/filter/UPDATE_QUERY_STRING';

const initialState = { queryString: '' };
export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUERY_STRING:
      return { ...state, queryString: action.queryString };
    default:
      return state;
  }
}

export function updateQueryString(queryString) {
  return {
    type: UPDATE_QUERY_STRING,
    queryString
  };
}

export const getQueryString = state => state.filter.queryString;

