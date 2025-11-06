import { defineConfig } from 'vite'

// Minimal Vite config without the React plugin to avoid ESM/CJS plugin loading issues
export default defineConfig({
  server: {
    port: 5173
  }
})
