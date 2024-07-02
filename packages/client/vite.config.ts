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
    __EXTERNAL_SERVER_URL__: JSON.stringify(process.env.EXTERNAL_SERVER_URL),
    __INTERNAL_SERVER_URL__: JSON.stringify(process.env.INTERNAL_SERVER_URL),
  },
  plugins: [react(), VitePluginWebpCompress()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Adjust the path according to your project structure
    },
  },
  build: {
    outDir: path.join(__dirname, 'dist/client'),
    rollupOptions: {
      input: {
        app: 'src/app/app.tsx',
        html: 'index.html',
      },
    },
    ssr: true,
  },
  ssr: {
    format: 'cjs',
  },
})
