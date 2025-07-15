import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://sutefu23.github.io',
  base: '/hisho/',
  output: 'static',
  compressHTML: true,
  build: {
    assets: 'assets'
  }
});