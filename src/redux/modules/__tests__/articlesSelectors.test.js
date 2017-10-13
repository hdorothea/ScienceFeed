import deepFreeze from 'deep-freeze';
import { getQueriedArticles } from '../articles';

describe('getQueriedArticles', () => {
  test('Returns the articles containing the query in the title', () => {
    const state = deepFreeze({
      articles: { data: [{ title: 'hello' }, { title: 'world' }] },
      filter: { queryString: 'ld' },
    });

    const queriedArticles = getQueriedArticles(state);

    expect(queriedArticles).toEqual([{ title: 'world' }]);
  });
});
