import { getData, pickResult, renameResult } from '../utils/api';

const FETCH_START = 'REQUEST_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = { isFetching: false };

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return { ...state, isFetching: true };
    case FETCH_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case FETCH_ERROR:
      return { ...state, isFetching: false };
    default:
      return state;
  }
}

export function startDataFetch() {
  return {
    type: FETCH_START,
  };
}

export function receiveData(data) {
  return {
    type: FETCH_SUCCESS,
    data,
  };
}

export function acknowledgeFetchError(err) {
  return {
    type: FETCH_ERROR,
    err,
  };
}

export function fetchData(apiKey, category = 'Science', period = 7) {
  return async (dispatch) => {
    dispatch(startDataFetch);
    let data;
    try {
      data = await getData(apiKey, category, period, result =>
        renameResult(
          pickResult(result, [
            'url',
            'section',
            'byline',
            'title',
            'abstract',
            'published_date',
            'views',
          ]),
          { published_date: 'publishedDate', views: 'viewRank' },
        ),
      );
      dispatch(receiveData(data));
    } catch (err) {
      acknowledgeFetchError(err);
    }
  };
}
