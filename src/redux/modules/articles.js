import { createSelector } from 'reselect';

import { getData, transformNYTResult } from '../../utils/api';
import { startFetch, errFetch } from './fetch';
import { getQueryString } from './filter';

export const RECEIVE_ARTICLES = 'science-feed/articles/RECEIVE';
export const SELECT_ARTICLE = 'science-feed/articles/SELECT';

const initialState = { data: [], selectedArticle: {} };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return { ...state, data: action.data };
    case SELECT_ARTICLE:
      return { ...state, selectedArticle: action.article };
    default:
      return state;
  }
}

export function receiveArticles(data) {
  return {
    type: RECEIVE_ARTICLES,
    data
  };
}

export function selectArticle(article) {
  return {
    type: SELECT_ARTICLE,
    article
  };
}

export function fetchArticles(apiKey, category = 'Science', period = 7) {
  return async (dispatch) => {
    dispatch(startFetch());
    let data;
    try {
      data = await getData(apiKey, category, period, result =>
        transformNYTResult(result)
      );
      dispatch(receiveArticles(data));
    } catch (err) {
      dispatch(errFetch(err));
    }
  };
}

export const getArticles = state => state.articles.data;
export const areThereArticles = state => state.articles.data.length > 0;
export const getSelectedArticle = state => state.articles.selectedArticle;

export const getQueriedArticles = createSelector(
  getArticles,
  getQueryString,
  (articles, queryString) =>
    articles.filter(article => article.title.toLowerCase().includes(queryString.toLowerCase()))
);
