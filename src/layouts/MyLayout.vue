<template>
  <q-layout view="hHh Lpr lFf">
    <q-layout-footer class="max-width-center">
      <demo-tabs v-if="$q.theme === 'ios'" />
      <q-tabs color="brown-14" inverted align="justify" style="height:57px">
        <q-route-tab @click="showButton()" to="/" default name="news" slot="title" icon="stars" label="Home" class="sml-label" />
        <q-route-tab @click="showButton()" to="/orders" name="order" slot="title" icon="free_breakfast" label="Order" class="sml-label" />
        <q-route-tab @click="showButton()" to="/stores" name="account" slot="title" icon="store" label="Store" class="sml-label" />
        <q-route-tab @click="showButton()" to="/member" name="member" slot="title" icon="account_box" label="Member" class="sml-label" />
      </q-tabs>
    </q-layout-footer>
    <q-page-container :style="{height:fullHeight}" class="tab-page max-width-center">
      <reg-button class="reg-button-wrapper" v-on:hide-button="hideButton" :hidden=isHiddenReqBtn />
      <router-view class="tab-page-content" />
    </q-page-container>
  </q-layout>
</template>
<script>
import regButton from '../components/regButton.vue'
export default {
  name: 'MyLayout',
  components: {
    regButton,
  },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      isHiddenReqBtn: false,
      fullHeight: window.innerHeight - '57' + 'px',
    }
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    hideButton() {
      this.isHiddenReqBtn = true
    },
    showButton() {
      this.isHiddenReqBtn = false
    },
    handleResize(event) {
      this.fullHeight = window.innerHeight - '57' + 'px'
    },
  },
  created() {
    setTimeout(() => {
      let tabPage = document.getElementsByClassName('tab-page')
      tabPage[0].style.height = window.innerHeight - '57' + 'px'
      console.log(tabPage.clientHeight)
    }, 10)
    window.addEventListener('resize', this.handleResize)
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
.max-width-center {
  max-width: 700px;
  margin: 0 auto;
}
.tab-page {
  background: #eee;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-bottom: 0 !important;
  position: relative;
}
.tab-page-content {
  background: #ccccee;
  height: 100%;
}
body,
html,
.q-app {
  height: 100%;
  overflow: hidden;
}
.reg-button-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 127px;
  height: 57px;
}
</style>
