import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgLoader from 'vite-svg-loader'
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  plugins: [react(), svgLoader(), viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    mozjpeg: {
      quality: 20,
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          name: 'removeViewBox',
        },
        {
          name: 'removeEmptyAttrs',
          active: false,
        },
      ],
    },
  }),
],
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
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  esbuild: {
    loader: "jsx", // OR "jsx"
    include: [
      "src/**/*.jsx",
      "node_modules/**/*.jsx",
    ],
  },
})
