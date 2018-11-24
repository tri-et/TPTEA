importScripts("/precache-manifest.1735c89f756239ee97b8f2477edb0bc0.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
const CACHE_NAME = 'V93'
workbox.routing.registerRoute(
  new RegExp('/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: CACHE_NAME,
  })
)
self.addEventListener('message', messageEvent => {
  if (messageEvent.data === 'skipWaiting') {
    self.skipWaiting().then(() => {
      messageEvent.source.navigate(self.location.origin)
    })
  }
})

