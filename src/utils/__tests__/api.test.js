import nock from 'nock';
import { getData, transformNYTResult, transformNYTMedia } from '../api';

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

describe('transformNYTResult', () => {

  it('sets the values to undefined/null and doesnt fail if value are not present in the result', () => {
    const result = transformNYTResult([]);
    expect(result.viewRank).toBeUndefined();
  });

  it('renames correctly', () => {
    const result = transformNYTResult([{ views: 2 }, {}]);
    expect(result[0].viewRank).toEqual(2);
  });

  it('returns the seperated keywords', () => {
    const result = transformNYTResult([{ adx_keywords: 'hallo;lola;buh' }, {}]);
    expect(result[0].keywords).toEqual(['hallo', 'lola', 'buh']);
  });
});

describe('transformNYTMedia', () => {
  it('should return the first items caption with type image with the correct size and that images url', () => {
    const media = [
      { type: 'video', caption: 'video caption', 'media-metadata': [{}, {}, { url: 'some url' }] },
      {
        type: 'image',
        caption: 'image caption',
        'media-metadata': [{}, {}, { format: 'mediumThreeByTwo440', url: 'win.com' }]
      }
    ];
    const result = transformNYTMedia(media);
    expect(result).toEqual({ caption: 'image caption', url: 'win.com' });
  });
});
