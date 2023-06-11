import {getWords} from './utils/words';
import type {Options} from './types';

export default function (options: Options) {
  const {list, wordCount, seed, delimiter} = options;
  return getWords(list, wordCount, seed).join(delimiter ?? '');
}
