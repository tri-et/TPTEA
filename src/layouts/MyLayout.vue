<template>
  <q-layout view="hHh Lpr lFf">
    <q-layout-footer class="max-width-center">
      <demo-tabs v-if="$q.theme === 'ios'" />
      <q-tabs color="brown-14" inverted align="justify" style="height:57px">
        <q-route-tab to="/" default name="news" slot="title" icon="stars" label="Home" class="sml-label" />
        <q-route-tab to="/orders" name="order" slot="title" icon="free_breakfast" label="Order" class="sml-label" />
        <q-route-tab to="/stores" name="account" slot="title" icon="store" label="Store" class="sml-label" />
        <q-route-tab to="/member" name="member" slot="title" icon="account_box" label="Member" class="sml-label" />
      </q-tabs>
    </q-layout-footer>
    <q-page-container class="tab-page max-width-center">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {openURL} from 'quasar'
import {mapMutations} from 'vuex'

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    }
  },
  methods: {
    openURL,
    ...mapMutations('member', ['setIsReq', 'setCurrentComponent']),
    routeToMember() {
      this.$store.commit('member/setIsReq', true)
    },
  },
}
</script>

<style>
.sml-label {
  font-size: 12px !important;
}
.q-layout-footer {
  box-shadow: 0 -2px 2px -1px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.14), 0 -1px 10px rgba(0, 0, 0, 0.12) !important;
}
.q-tab-icon {
  font-size: 22px;
}
.animate-pop {
  text-transform: none;
  font-size: 14px !important;
  padding: 13px 25px;
  display: block;
}
.tab-page {
  /* height: 100%;*/
  height: calc(100% - 57px);
  position: relative;
  background: #eee;
  overflow-y: scroll;
  overflow-x: hidden;
}
.max-width-center {
  max-width: 700px;
  margin: 0 auto;
}
body,
html,
.q-app {
  height: calc(100% - 57px);
  overflow: hidden;
}
</style>
