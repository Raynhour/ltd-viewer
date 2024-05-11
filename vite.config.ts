import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ClosePlugin from './vite-plugin-close.ts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    watch: false
  },
  plugins: [
    ClosePlugin(),
    vue(),
    Vuetify({
      autoImport: true
      // styles: {
      //   configFile: 'src/styles/settings.scss',
      // },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
