import { defineConfig } from 'vite';

export default defineConfig({
  base: '/3d-viewer/',
  server: {
    fs: {
      allow: ['..']
    }
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets'
  }
});