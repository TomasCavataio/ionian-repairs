import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ionian-repairs/',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssMinify: 'esbuild',
  },
})
