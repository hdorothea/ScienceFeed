import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import articlesReducer from '../articles';

import {
  selectArticle,
  receiveArticles,
  SELECT_ARTICLE,
  RECEIVE_ARTICLES,
  fetchArticles,
} from '../articles';
import { FETCH_START, FETCH_ERROR } from '../fetch';

describe('articles Reducer', () => {
  it('should handle SELECT_ARTICLE', () => {
    expect(articlesReducer({}, { type: SELECT_ARTICLE, article: { title: 'article1' } })).toEqual({
      selectedArticle: { title: 'article1' },
    });
  });
});

describe('receiveArticles action', () => {
  it('should create an action to add articles', () => {
    const articles = [{ title: 'Article1' }, { title: 'Article2' }];
    const expectedAction = {
      type: RECEIVE_ARTICLES,
      data: articles,
    };
    expect(receiveArticles(articles)).toEqual(expectedAction);
  });
});

describe('selectArticles action', () => {
  it('should create an action to set a selectedArticle', () => {
    const article = { title: 'Article1' };
    const expectedAction = {
      type: SELECT_ARTICLE,
      article,
    };
    expect(selectArticle(article)).toEqual(expectedAction);
  });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchArticles async actions', () => {
  const testCategory = 'Sciene';
  const testPeriod = 7;
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    nock.cleanAll();
  });

  it('fcreates RECEIVE_ARTICLES and FETCH_START actions', async () => {
    const testArticles = [{ title: 'article1' }, { title: 'article2' }];
    nock(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${testCategory}/${testPeriod}.json`)
      .get('')
      .query({ 'api-key': 'fake' })
      .reply(200, { results: testArticles });

    const expectedActions = [{ type: FETCH_START }, { type: RECEIVE_ARTICLES, data: testArticles }];

    await store.dispatch(fetchArticles('fake', testCategory, testPeriod));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('can create FETCH_ERROR action', async () => {
    nock(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${testCategory}/${testPeriod}.json`)
      .get('')
      .query({ 'api-key': 'fake' })
      .replyWithError('something awful happened');
    await store.dispatch(fetchArticles('fake', testCategory, testPeriod));

    expect(store.getActions().map(action => action.type)).toEqual(
      expect.arrayContaining([FETCH_ERROR]),
    );
  });
});
