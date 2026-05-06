import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        servicios: resolve(__dirname, 'servicios/index.html'),
        trabajos: resolve(__dirname, 'trabajos/index.html'),
        contacto: resolve(__dirname, 'contacto/index.html'),
        cerramientos: resolve(__dirname, 'cerramientos/index.html'),
        zonas: resolve(__dirname, 'zonas/index.html'),
        nosotros: resolve(__dirname, 'nosotros/index.html'),
        podaBarcelona: resolve(__dirname, 'poda-arboles-barcelona/index.html'),
        talaBarcelona: resolve(__dirname, 'tala-arboles-barcelona/index.html'),
        desbroceBarcelona: resolve(__dirname, 'desbroce-parcelas-barcelona/index.html'),
      },
    },
  },
});
