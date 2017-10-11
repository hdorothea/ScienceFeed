import { apiGet } from './api';
import { getData } from './api';

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
    const testCallback = async (response) => {
      const result = await response.json();
      return result.hello;
    };

    nock(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${testCategory}/${testPeriod}.json`)
      .get('')
      .query(queryObject => queryObject.apiKey === 'fake')
      .reply(200, { hello: 'world', bye: 'moon' });
    const result = await getData('fake', testCategory, testPeriod, testCallback);
    expect(result).toEqual('world');
  });
});
