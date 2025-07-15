import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://secretary-service.com',
  base: '/',
  output: 'static',
  compressHTML: true,
  build: {
    assets: 'assets'
  }
});