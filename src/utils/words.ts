import {getCryptoRandomValues, getPsuedoRandomValues} from './random';
import {small, medium, large} from '../dict';
import type {WordList} from '../types';

export function getWords(list: WordList, wordCount: number, seed?: string | number) {
  const array = new Uint16Array(wordCount);
  const words = getList(list);
  const values = seed
    ? getPsuedoRandomValues(array, seed)
    : getCryptoRandomValues(array);
  return Array.from(values).map(index => words[index % list.length]);
}

export function getList(name: WordList) {
  switch (name) {
    case 'small': return small;
    case 'medium': return medium;
    case 'large': return large;
  }
}
