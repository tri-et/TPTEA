importScripts("precache-manifest.2e53be5c8b774e9a1e1220a1c8f9bbbb.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
// eslint-disable-next-line no-undef

if (self.workbox) {
  self.workbox.precaching.precache(self.__precacheManifest)

  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request)
      })
    )
  })
}

