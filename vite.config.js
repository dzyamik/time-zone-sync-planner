import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Replace with your repo name
const repo = 'timezone-sync'

export default defineConfig({
  plugins: [vue()],
  base: `/${repo}/`, // Required for GitHub Pages
})
