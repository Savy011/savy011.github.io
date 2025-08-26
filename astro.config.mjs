import tailwindcss from '@tailwindcss/vite'
// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        name: 'Archivo Narrow',
        provider: fontProviders.fontsource(),
        cssVariable: '--font-archivo-narrow',
      },
    ],
  },
})
