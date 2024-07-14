// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   // base: "/sweettooth/",
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://timbu-get-all-products.reavdev.workers.dev/',
//         // target: 'https://api.timbu.cloud',
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    open: true,
    port: 3000
  }
});
