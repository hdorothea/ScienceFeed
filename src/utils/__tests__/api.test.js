import { apiGet, getData, pickResult } from './api';

const nock = require('nock');

describe('apiGet', () => {
  it('fetches', async () => {
    nock('http://fake.com')
      .get('/')
      .reply(200, { hello: 'world' });
    const res = await (await apiGet('http://fake.com')).json();
    expect(res.hello).toEqual('world');
  });
});

describe('getData', () => {
  it('returns the desired data', async () => {
    const testCategory = 'Science';
    const testPeriod = 7;

    nock(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${testCategory}/${testPeriod}.json`)
      .get('')
      .query({ 'api-key': 'fake' })
      .reply(200, { hello: 'world', bye: 'moon' });
    const pickedResult = await getData('fake', testCategory, testPeriod, result => result.hello);
    expect(pickedResult).toEqual('world');
  });
});

describe('pickResponse', () => {
  it('returns an array of picked objects', () => {
    const pickedResult = pickResult(
      [{ title: 'hello', abstract: 'world' }, { title: 'bye', abstract: 'mars' }],
      ['title'],
    );
    expect(pickedResult).toEqual([{ title: 'hello' }, { title: 'bye' }]);
  });
});
