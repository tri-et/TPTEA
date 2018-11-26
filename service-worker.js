importScripts("/precache-manifest.c95fa418cb2188c56d249365ed1a2556.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
const CACHE_NAME = 'V598'
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

