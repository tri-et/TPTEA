importScripts("precache-manifest.b65f5d3d7f46af59537bd89fac1c311b.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
// const CACHE_NAME = 'V_4'
// self.addEventListener('install', event => {
//   event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(self.__precacheManifest)))
// })
workbox.core.setCacheNameDetails({prefix: 'tptea_v1'})
self.workbox.precaching.precache(self.__precacheManifest)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})
// workbox.routing.registerRoute(new RegExp('/'), workbox.strategies.cacheFirst())
self.addEventListener('message', messageEvent => {
  if (messageEvent.data === 'skipWaiting') {
    return self.skipWaiting()
  }
})
// self.addEventListener('activate', function(event) {
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       let validCacheSet = new Set(Object.values(workbox.core.cacheNames))
//       return Promise.all(
//         cacheNames
//           .filter(cacheName => {
//             return !validCacheSet.has(cacheName)
//           })
//           .map(cacheName => {
//             return caches.delete(cacheName)
//           })
//       )
//     })
//   )
// })

