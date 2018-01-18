import nock from 'nock';
import { getData, pickResult } from '../api';

describe('getData', () => {
  it('returns the desired data', async () => {
    const testCategory = 'Science';
    const testPeriod = 7;

    nock(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${testCategory}/${testPeriod}.json`)
      .get('')
      .query({ 'api-key': 'fake' })
      .reply(200, { results: { hello: 'world', bye: 'moon' } });
    const pickedResult = await getData('fake', testCategory, testPeriod, result => result.hello);
    expect(pickedResult).toEqual('world');
  });
});

describe('pickResponse', () => {
  it('returns an array of picked objects', () => {
    const pickedResult = pickResult(
      [{ title: 'hello', abstract: 'world' }, { title: 'bye', abstract: 'mars' }],
      ['title']
    );
    expect(pickedResult).toEqual([{ title: 'hello' }, { title: 'bye' }]);
  });
});
