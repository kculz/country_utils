import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/country_utils.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  outDir: 'dist',
});
