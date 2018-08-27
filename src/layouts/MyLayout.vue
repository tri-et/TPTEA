<template>
  <q-layout view="hhh lpr fFf">
    <q-layout-footer>
      <q-tabs inverted position="bottom" color="brown-6" align="justify">
        <q-route-tab to="/" default name="news" slot="title" icon="stars" label="Home" />
        <q-route-tab to="/orders" name="order" slot="title" icon="free_breakfast" label="Order" />
        <q-route-tab to="/stores" name="account" slot="title" icon="store" label="Store" />
        <q-route-tab to="/members/login" name="member" slot="title" icon="account_box" label="Member" />
      </q-tabs>
    </q-layout-footer>
    <q-page-container class="et-home">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data() {
    return {}
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
</style>
