import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  mimeTypes: {
    '.jsx': 'application/javascript'
  },

  base: "/react-todo-app/",
  plugins: [react()]
})

