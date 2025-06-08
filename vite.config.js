import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Replace with your repo name
const repo = 'time-zone-sync-planner'

export default defineConfig({
  plugins: [vue()],
  base: `/${repo}/`, // Required for GitHub Pages
})
