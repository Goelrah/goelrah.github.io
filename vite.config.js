import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/Goelrah/' if not using Goelrah.github.io repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})