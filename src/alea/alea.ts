export function* prng(seed: string | number = Date.now(), result?: 'uint32' | 'fract53') {
  const _mash = mash();
  
  let c = 1;
  let s0 = _mash();
  let s1 = _mash();
  let s2 = _mash();

  s0 -= _mash(seed);
  if (s0 < 0) s0 += 1;
  s1 -= _mash(seed);
  if (s1 < 0) s1 += 1;
  s2 -= _mash(seed);
  if (s2 < 0) s2 += 1;

  while (true) {
    const t = 2091639 * s0 + c * 2.3283064365386963e-10; // 2^-32
    s0 = s1;
    s1 = s2;
    const random = (s2 = t - (c = t | 0));
    switch (result) {
      case 'uint32':
        yield random * 0x100000000; // 2^32
        break;
      case 'fract53':
        yield random + ((random * 0x200000) | 0) * 1.1102230246251565e-16; // 2^-53
        break;
      default:
        yield random;
    }
  }
}

function mash() {
  let n = 0xefc8249d;
  return function (data: string | number = ' ') {
    data = data.toString();
    for (let i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      let h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  }
}
