import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  cacheDir: './.vite',
  resolve: {
    alias: {
      '@constant': resolve(__dirname, 'src/constant'),
      '@component': resolve(__dirname, 'src/component'),
      '@container': resolve(__dirname, 'src/container'),
      '@api': resolve(__dirname, 'src/api'),
      '@store': resolve(__dirname, 'src/store'),
      '@util': resolve(__dirname, 'src/util'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@layout': resolve(__dirname, 'src/layout'),
      '@type': resolve(__dirname, 'src/type'),
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'BASE_URL',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
