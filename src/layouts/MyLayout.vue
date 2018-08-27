<template>
  <q-layout view="hhh lpr fFf">
    <q-layout-footer class="max-width-center">
      <demo-tabs v-if="$q.theme === 'ios'" />
      <q-tabs inverted position="bottom" color="brown-6" align="justify">
        <q-route-tab @click="showButton()" to="/" default name="news" slot="title" icon="stars" label="Home" class="sml-label" />
        <q-route-tab @click="showButton()" to="/orders" name="order" slot="title" icon="free_breakfast" label="Order" class="sml-label" />
        <q-route-tab @click="showButton()" to="/stores" name="account" slot="title" icon="store" label="Store" class="sml-label" />
        <q-route-tab @click="showButton()" to="/member" name="member" slot="title" icon="account_box" label="Member" class="sml-label" />
      </q-tabs>
    </q-layout-footer>
    <q-page-container class="et-home">
      <router-view />
      <reg-button class="reg-button-wrapper" v-on:hide-button="hideButton" :hidden=isHiddenReqBtn />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  name: 'MyLayout',
  components: {
    regButton,
  },
  data() {
    return {}
  },
  methods: {
    hideButton() {
      this.isHiddenReqBtn = true
    },
    showButton() {
      this.isHiddenReqBtn = false
    },
}
</script>
<style>
.et-home {
  overflow: auto;
  height: calc(100vh - 65px) !important;
}
.q-layout-page-container {
  padding-bottom: 0px !important;
}
.max-width-center {
  max-width: 700px;
  margin: 0 auto;
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
.reg-button-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 57px;
  width: 127px;
</style>
