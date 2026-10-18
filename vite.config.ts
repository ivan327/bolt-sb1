import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/bolt-sb1/',
  plugins: [react()],
  server: { host: true, port: 5173 },
});
