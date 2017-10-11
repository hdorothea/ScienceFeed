import fetch from 'isomorphic-fetch';

export async function apiGet(url) {
  const res = await fetch(url);
  return res;
}

export async function getData(key, category, period, callback) {
  const url = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${category}/${period}.json?api-key=${key}`;
  let res = await apiGet(url);
  if (callback) {
    res = await callback(res);
  }
  return res;
}
