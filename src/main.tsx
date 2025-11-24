import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Register service worker for PWA and force update behavior so users get latest resources
// Enable registration in both development and production so SW is active during local testing.
if (import.meta.env.DEV || import.meta.env.PROD) {
  try {
    // virtual:pwa-register provides a small helper to register the SW and trigger updates
    // It is injected by vite-plugin-pwa when the plugin is enabled for dev/prod.
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { registerSW } = await import('virtual:pwa-register')

    const updateSW = registerSW({
      onRegistered(r) {
        // optional: keep a reference to the registration
      },
      onRegisteredSW(swRegistration) {
        // optional hook
      },
      onNeedRefresh() {
        // New content available — apply immediately
        // updateSW(true) will call skipWaiting and reload the page
        updateSW(true).catch(() => window.location.reload())
      },
      onOfflineReady() {
        // App is ready to work offline
      },
    })
  } catch (e) {
    // plugin not installed or import failed
  }
}

createRoot(document.getElementById('root')!).render(<App />)
