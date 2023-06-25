import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  resolve: {
    extensions: ['.js', '.jsx']
  },
  mimeTypes: {
    '.js': 'application/javascript',
    '.jsx': 'application/javascript'
  },

  base: "/react-todo-app/",
  plugins: [react()]
})

