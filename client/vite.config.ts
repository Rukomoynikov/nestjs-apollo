import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'),
    }
  },
  server: {
    proxy: {
      '/graphql': {
        target: 'http://localhost:4000',
        secure: false,
        ws: true,
      }
    },
    port: 3000,
  },
})
