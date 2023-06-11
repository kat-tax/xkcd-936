/// <reference types="vitest"/>

import vite from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

const fileNames = {
  es: `${pkg.name}.mjs`,
  cjs: `${pkg.name}.cjs`,
  iife: `${pkg.name}.iife.js`,
};

const formats = Object.keys(fileNames) as Array<keyof typeof fileNames>;

module.exports = vite.defineConfig({
  plugins: [dts()],
  build: {
    rollupOptions: {
      input: ['./src/index.ts'],
    },
    lib: {
      formats,
      fileName: format => fileNames[format],
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: pkg.name.replace(/-./g, (char) => char[1].toUpperCase()),
    },
  },
  test: {},
});
