// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// const baseURL = import.meta.env.VITE_APP_API_BASE_URL;

// export default defineConfig({
//   base: "/",
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: baseURL,
//         // target: 'https://api.timbu.cloud',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

const baseURL = process.env.VITE_APP_API_BASE_URL;

if (!baseURL) {
  throw new Error('VITE_APP_API_BASE_URL environment variable is not defined');
}

export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: baseURL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
