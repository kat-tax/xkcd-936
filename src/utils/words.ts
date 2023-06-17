import {getCryptoRandomValues, getPsuedoRandomValues} from './random';
import {small, medium, large} from '../dict';
import type {WordList} from '../types';

export function getWords(list: WordList, wordCount: number, seed?: string | number) {
  const array = new Uint16Array(wordCount);
  const words = getList(list);
  const values = seed
    ? getPsuedoRandomValues(array, seed)
    : getCryptoRandomValues(array);
  return getWord(words, values);
}

function getWord(words: string[], values: Uint16Array) {
  return Array.from(values).map(i => words[i % words.length]);
}

function getList(name: WordList) {
  switch (name) {
    case 'small': return small;
    case 'medium': return medium;
    case 'large': return large;
  }
}
