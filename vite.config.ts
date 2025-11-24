import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    // PWA plugin: generate service worker + manifest
    VitePWA({
      registerType: 'autoUpdate',
      // enable dev SW so you can test PWA behaviour locally
      devOptions: {
        enabled: true,
        /*
         * type 'module' uses ESM service worker which works well with Vite preview
         * you can remove or change as needed
         */
        type: 'module',
      },
      includeAssets: ['favicon.ico', 'robots.txt', 'assets/images/logo.png'],
      manifest: {
        name: 'Esenyx — Event Registration',
        short_name: 'Esenyx',
        description: 'Smart event registration & entry management by EllowDigital',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: '/assets/images/logo.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/assets/images/logo.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // cleanup old caches automatically
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        // ensure generated precache manifest refreshes when build changes
        globPatterns: ['**/*.{js,css,html,png,svg,ico,json}'],
        // runtimeCaching: use network-first so user always gets latest resources when online
        runtimeCaching: [
          {
            urlPattern: /.*\.(?:js|css|html)$/, // scripts and styles
            handler: 'NetworkFirst',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxEntries: 100,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif|webp|ico)/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 60,
              },
            },
          },
          {
            // API / backend calls should also prefer network
            urlPattern: /\/api\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-responses',
              networkTimeoutSeconds: 10,
            },
          },
        ],
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
}))
