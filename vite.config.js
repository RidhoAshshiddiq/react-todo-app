import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react';

export default {
  plugins: [React({ detectReact: true })],

  base: '/react-todo-app/',

  server: {
    port: 3000,
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
};
