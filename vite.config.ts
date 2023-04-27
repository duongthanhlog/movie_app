import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [react(), svgLoader()],
  server: {
    port: 3000,
    host: true
  },
  resolve :  {
    alias : {
      '@' : path.resolve(__dirname,'./src')
    }
  },
  css : {
    modules : {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    }
  }
})
