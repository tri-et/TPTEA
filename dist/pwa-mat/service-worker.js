importScripts("/precache-manifest.76196a69405046b8db1f03fea3fdd272.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js");

/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js')
const CACHE_NAME = 'V8'
workbox.precaching.precacheAndRoute([])
workbox.routing.registerRoute(
  new RegExp('/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: CACHE_NAME,
  })
)

