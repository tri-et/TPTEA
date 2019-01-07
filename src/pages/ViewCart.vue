<template>
  <q-page>
    <q-layout-header class="max-width-center-h">
      <q-toolbar class="q-pt-none q-pb-none" color="secondary">
        <q-btn color="white" flat round dense icon="reply" @click="back()"/>
        <q-toolbar-title>Current Cart</q-toolbar-title>
        <i class="material-icons q-title">shopping_cart</i>
      </q-toolbar>
    </q-layout-header>
    <order-details v-for="n in 5" :key="n"/>
    <q-layout-footer class="max-width-center-h">
      <q-toolbar color="secondary" class="row inline items-center">
        <q-btn label="Place Holder" color="primary"/>
        <q-toolbar-title class="text-right">$30</q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>
  </q-page>
</template>
<script>
import orderDetails from '../components/OrderDetails'
export default {
  components: {
    orderDetails,
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="stylus" scoped>
</style>
