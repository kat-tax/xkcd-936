import prng from '../alea';

export function getPsuedoRandomValues(array: Uint16Array, seed: string | number) {
  const gen = prng(seed);
  const len = array.length;
  const val = new Uint16Array(len);
  for (let i = 0; i < len; i++) {
    const {value} = gen.next();
    if (value) {
      val[i] = Math.floor(value * 256);
    } else {
      throw new Error('Invalid random value');
    }
  }
  array.set(val);
  return array;
}

export function getCryptoRandomValues(array: Uint16Array) {
  // @ts-ignore
  const browserCrypto: Crypto = globalThis.crypto || globalThis.msCrypto;
  if (browserCrypto?.getRandomValues) {
    return browserCrypto.getRandomValues(array);
  } else {
    const nodeCrypto = require('crypto');
    if (nodeCrypto?.randomBytes) {
      const bytes = nodeCrypto.randomBytes(array.length);
      array.set(bytes);
      return array;
    } else {
      throw new Error('No secure random number generator available.');
    }
  }
}
