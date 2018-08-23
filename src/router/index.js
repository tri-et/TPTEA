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
  let isReq = false // () => localStorage.getItem('isReq')
  let isAuth = false // () => !!localStorage.getItem('auth-token')

  Router.beforeEach((to, _, next) => {
    if (isAuth) {
      if (to.path === '/member') {
        next()
      } else if (to.path === '/member/register') {
        next('/member')
      } else next()
    } else {
      if (isReq && !isAuth) {
        if (to.path === '/member/register' && isAuth === false) next()
        else next('/member/register')
      } else {
        if (to.path === '/member/login') next()
        else if (top !== '/member/login' && to.path !== '/member') next()
        else next('/member/login')
      }
    }
  })
  return Router
}
