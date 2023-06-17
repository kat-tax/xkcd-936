/// <reference types="vitest"/>

import vite from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

const files = {
  es: `${pkg.name}.mjs`,
  cjs: `${pkg.name}.cjs`,
  iife: `${pkg.name}.iife.js`,
};

module.exports = vite.defineConfig({
  plugins: [
    dts(),
  ],
  build: {
    rollupOptions: {
      input: ['./src/index.ts'],
    },
    lib: {
      name: pkg.name.replace(/-./g, c => c[1].toUpperCase()),
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: Object.keys(files) as Array<keyof typeof files>,
      fileName: format => files[format],
    },
  },
});
