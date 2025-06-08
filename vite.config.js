import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Replace with your repo name
const repo = 'time-zone-sync-planner'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: `/${repo}/`, // Required for GitHub Pages
})
