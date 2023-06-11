import xkcd from './index';

// Crypto-random generated passphrase
console.log(xkcd({
  list: 'large',
  wordCount: 5,
  delimiter: '-',
}));

// Psuedo-random generated passphrase
console.log(xkcd({
  list: 'medium',
  wordCount: 3,
  delimiter: '_',
  seed: 'how now brown cow',
}));
