import fetch from 'isomorphic-fetch';
import { rename } from './common';

const pick = require('lodash.pick');


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
export function transformResult(result, transformFunc) {
  return result.map(element => transformFunc(element));
}

export function pickResult(result, picks) {
  return transformResult(result, element => pick(element, picks));
}

export function renameResult(result, renameMapping) {
  return transformResult(result, element => rename(element, renameMapping));
}
