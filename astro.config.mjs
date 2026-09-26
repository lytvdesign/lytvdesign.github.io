import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

const prerenderEntry = fileURLToPath(
  new URL('./node_modules/astro/dist/entrypoints/prerender.js', import.meta.url),
);

export default defineConfig({
  output: 'static',
  site: 'https://lytvdesign.github.io',
  vite: {
    resolve: {
      alias: {
        'astro/entrypoints/prerender': prerenderEntry,
      },
    },
  },
});
