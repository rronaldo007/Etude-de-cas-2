import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration Vite du frontend Kanban (React + Bootstrap).
// - plugin React (JSX, Fast Refresh)
// - proxy /api vers le backend Node pour éviter les problèmes de CORS en dev
// - configuration des tests (Vitest + Testing Library) pour l'Ex. 8
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Toute requête /api/... est redirigée vers l'API REST (backend Express)
      '/api': 'http://localhost:3000',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
