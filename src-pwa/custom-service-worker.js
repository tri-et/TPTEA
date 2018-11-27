/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
// const CACHE_NAME = 'V_4'
// self.addEventListener('install', event => {
//   event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(self.__precacheManifest)))
// })
workbox.core.setCacheNameDetails({prefix: 'tptea'})
self.workbox.precaching.precache(self.__precacheManifest)
// workbox.routing.registerRoute(new RegExp('/'), workbox.strategies.staleWhileRevalidate())

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})
self.addEventListener('message', ({data}) => {
  if (data === 'skipWaiting') {
    self.skipWaiting()
  }
})
