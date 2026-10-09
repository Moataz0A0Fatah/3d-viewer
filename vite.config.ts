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
    assetsDir: 'assets',
    // Optimize images during build
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});