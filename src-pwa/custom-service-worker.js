/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
const CACHE_NAME = 'V53'
workbox.routing.registerRoute(
  new RegExp('/'),
  workbox.strategies.cacheFirst({
    cacheName: CACHE_NAME,
  })
)
self.addEventListener('message', messageEvent => {
  if (messageEvent.data === 'skipWaiting') {
    self.skipWaiting()
    self.clients.claim()
  }
})
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      let validCacheSet = new Set(Object.values(workbox.core.cacheNames))
      return Promise.all(
        cacheNames
          .filter(function(cacheName) {
            return !validCacheSet.has(cacheName)
          })
          .map(function(cacheName) {
            return caches.delete(cacheName)
          })
      )
    })
  )
})
