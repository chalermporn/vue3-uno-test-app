/// <reference types="vitest" />
import {fileURLToPath, URL} from "node:url"

import vue from "@vitejs/plugin-vue"
import Unocss from 'unocss/vite'
import {defineConfig} from "vite"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()],
  resolve: {
    alias: {"@": fileURLToPath(new URL("./src", import.meta.url)),},
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/],
    },
    include: [
      "**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"
    ]
  },
})

