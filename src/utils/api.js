import fetch from 'isomorphic-fetch';

export async function getData(key, category, period, callback) {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${category}/${period}.json?api-key=${key}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  let result = (await response.json()).results;
  if (callback) {
    result = callback(result);
  }
  return result;
}

export function transformNYTMedia(media) {
  for (const mediaItem of media) {
    if (['image', 'img', 'picture'].includes(mediaItem.type)) {
      const correctFormatImgs = mediaItem['media-metadata'].filter(
        ({ format, height, width }) =>
          format === 'mediumThreeByTwo440' || (height === 293 && width === 440)
      );
      if (correctFormatImgs[0]) {
        return { caption: mediaItem.caption, url: correctFormatImgs[0].url };
      }
    }
  }
  return null;
}

// parse the publishdate
// TODO more generalized and more testable way to retrieve and transform the API responses
export function transformNYTResult(result) {
  return result.map(
    ({
      source,
      adx_keywords,
      url,
      section,
      byline,
      title,
      abstract,
      published_date,
      views,
      media,
      id
    }) => ({
      id,
      img: media ? transformNYTMedia(media) : null,
      url,
      section,
      byline,
      title,
      abstract,
      source,
      keywords: adx_keywords ? adx_keywords.split(';') : null,
      publishedDate: new Date(published_date),
      viewRank: views
    })
  );
}
