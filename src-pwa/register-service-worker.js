/*
 * This file is picked up by the build system only
 * when building for PRODUCTION
 */

import {register} from 'register-service-worker'
const subscribeUser = registration => {
  registration.pushManager
    .subscribe({
      userVisibleOnly: true,
    })
    .then(sub => {
      let {endpoint, keys} = sub.toJSON()
      fetch(`${window.location.origin}/api?query={registerPushSubscription(input:{
        endpoint: "${endpoint}",
        auth: "${keys.auth}",
        p256dh: "${keys.p256dh}"
      })}`).then(() => {
        console.log('User is subscribed')
      })
    })
    .catch(function(e) {
      if (Notification.permission === 'denied') {
        console.warn('Permission for notifications was denied')
      } else {
        console.error('Unable to subscribe to push', e)
      }
    })
}
register(process.env.SERVICE_WORKER_FILE, {
  ready() {
    console.log('App is being served from cache by a service worker.')
  },
  registered(registration) {
    // registration -> a ServiceWorkerRegistration instance
    console.log('Service worker has been registered.')
    registration.pushManager.getSubscription().then(sub => {
      if (sub === null) {
        Notification.requestPermission(result => {
          if (result === 'granted') {
            subscribeUser(registration)
          }
        })
      } else {
        return registration.pushManager.getSubscription()
      }
    })
  },
  cached(registration) {
    // registration -> a ServiceWorkerRegistration instance
    console.log('Content has been cached for offline use.')
  },
  updated(registration) {
    // registration -> a ServiceWorkerRegistration instance
    alert('New Version available. TP-Tea is reloading now!')
  },
  offline() {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error(err) {
    console.error('Error during service worker registration:', err)
  },
})

// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
