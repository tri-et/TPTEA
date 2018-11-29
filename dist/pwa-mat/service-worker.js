importScripts("precache-manifest.7d6d9e68678e946f4dfd00e0c427572f.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
workbox.core.setCacheNameDetails({prefix: 'tptea'})
self.workbox.precaching.precache(self.__precacheManifest)
const matchCb = ({url, event}) => {
  console.log(url)
  return url.pathname === '/categories'
}
// workbox.routing.registerRoute(new RegExp('/#/categories'), workbox.strategies.staleWhileRevalidate())
// workbox.routing.registerRoute(new RegExp('/#/customer'), workbox.strategies.networkFirst())
workbox.routing.registerRoute(matchCb, workbox.strategies.staleWhileRevalidate())
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

