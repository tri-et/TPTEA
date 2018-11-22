importScripts("precache-manifest.1f9d5950502e106292a3115b8073c05f.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

if (window.workbox) {
  window.workbox.precaching.precache(self.__precacheManifest)

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request)
      })
    )
  })
  console.log(window.workbox.core.cacheNames.precache)
}

