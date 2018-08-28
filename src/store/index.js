import Vue from 'vue'
import Vuex from 'vuex'

import customer from './customer'
import member from './member'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      customer,
      member,
    },
  })

  return Store
}
