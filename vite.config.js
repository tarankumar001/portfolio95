import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use the custom base only for production builds (GH Pages).
  // During development we must serve from root so Vite's dev server
  // serves modules with the correct MIME/type and paths.
  base: mode === 'production' ? '/wins95Portfolio/' : '/',
  build: {
    sourcemap: false, // Disable sourcemaps
  }
}))
