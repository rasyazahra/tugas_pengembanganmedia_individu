import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tugas_pengembanganmedia_individu/', // Jalur mutlak ke repository GitHub Pages Anda
})
