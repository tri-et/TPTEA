/*
 * This file is picked up by the build system only
 * when building for PRODUCTION
 */

import {register} from 'register-service-worker'

register(process.env.SERVICE_WORKER_FILE, {
  ready() {
    console.log('App is being served from cache by a service worker.')
  },
  registered(registration) {
    // registration -> a ServiceWorkerRegistration instance
    console.log('Service worker has been registered.')
  },
  cached(registration) {
    // registration -> a ServiceWorkerRegistration instance
    console.log('Content has been cached for offline use.')
  },
  updated(registration) {
    // registration -> a ServiceWorkerRegistration instance
    console.log('New content is available; please refresh.')
    console.log(window.QNotify)
    alert('New content is available; please refresh.')
    if (window.QNotify) {
      window.QNotify({
        message: window.store.getters.text.global.newVersionAvailable,
        timeout: 10000,
        type: 'info',
        actions: [
          {
            label: window.store.getters.text.global.refresh,
            handler: function() {
              window.location.reload()
            },
          },
        ],
      })
    }
  },
  offline() {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error(err) {
    console.error('Error during service worker registration:', err)
  },
})

// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
