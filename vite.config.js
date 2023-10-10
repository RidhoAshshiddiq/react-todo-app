import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  plugins: [react()],

  base: '/react-todo-app/',

  server: {
    port: 3000,
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
};
