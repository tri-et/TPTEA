import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({y: 0}),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  })
  localStorage.setItem('isReq', 'false')
  let isAuth = true // () => !!localStorage.getItem('auth-token')

  Router.beforeEach((to, _, next) => {
    if (isAuth) {
      if (to.path === '/member') {
        next()
        // prevent route to register page
      } else if (to.path === '/member/register') {
        next('/member')
      } else next()
    } else {
      if (
        to.path === '/member/register' ||
        to.path === '/member/login' ||
        (to.path !== '/member/login' && to.path !== '/member') // prevent route to member page
      ) {
        next()
      } else next('/member/login')
    }
  })
  return Router
}
