import prng from '../alea';

export function getCryptoRandomValues(array: Uint16Array) {
  return crypto.getRandomValues(array);
}

export function getPsuedoRandomValues(array: Uint16Array, seed: string | number) {
  const generator = prng(seed);
  const length = array.length;
  const values = new Uint16Array(length);
  for (let i = 0; i < length; i++) {
    const random = generator.next();
    if (random.value) {
      values[i] = Math.floor(random.value * 256);
    } else {
      throw new Error('Invalid random value');
    }
  }
  array.set(values);
  return array;
}
