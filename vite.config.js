import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import remarkHtml from 'vite-remark-html'

export default defineConfig({
  plugins: [
    Vue(),
    remarkHtml(),
  ],
})
