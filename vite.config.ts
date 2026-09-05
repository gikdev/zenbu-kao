import tailwindcss from '@tailwindcss/vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: true,
        crawlLinks: true,
      },
    }),
    nitro({
      prerender: {
        routes: ['/'],
        ignore: [
          '/apps/**',
          '/dashboard/**',
          '/contact',
          '/login',
          '/register',
          '/privacy',
          '/terms',
        ],
      },
    }),
    viteReact(),
  ],
})

export default config
