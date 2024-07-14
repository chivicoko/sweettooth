import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Uncomment this if you need a base path
  // base: "/sweettooth/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://timbu-get-all-products.reavdev.workers.dev/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
