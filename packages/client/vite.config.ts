import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'
import VitePluginWebpCompress from 'vite-plugin-webp-compress'
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  plugins: [react(), VitePluginWebpCompress()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Adjust the path according to your project structure
    },
  },
  build: {
    rollupOptions: {
      input: {
        app: 'src/app/app.tsx',
        html: 'index.html',
      },
    },
  },
})
