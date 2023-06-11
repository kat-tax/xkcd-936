# XKCD-936

> A passphrase generator that uses the XKCD-936 spec

```ts
import generate from 'xkcd-936';

// Crypto-random generated passphrase
console.log(generate({
  list: 'large',
  wordCount: 5,
  delimiter: '-',
}));

// Psuedo-random generated passphrase
console.log(generate({
  list: 'medium',
  wordCount: 3,
  delimiter: '_',
  seed: 'how now brown cow',
}));

```

![xkcd-936](https://imgs.xkcd.com/comics/password_strength.png)
