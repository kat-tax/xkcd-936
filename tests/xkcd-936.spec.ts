import {describe, expect, it, vi} from 'vitest';
import xkcd_936 from '../src';

describe('XKCD-936', () => {
 
  it('returns a function', () => {
    const instance = vi.fn(xkcd_936);
    expect(instance).toBeTypeOf('function');
  });

});
