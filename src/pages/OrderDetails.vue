<template>
  <q-page>
    <q-layout-header class="max-width-center-h">
      <q-toolbar class="q-pt-none q-pb-none" color="secondary">
        <q-btn color="white" flat round dense icon="reply" @click="backToCategoriesMenus()"/>
        <q-toolbar-title>Current Cart</q-toolbar-title>
        <i class="material-icons q-title">shopping_cart</i>
      </q-toolbar>
    </q-layout-header>
    <order-menu-detail v-for="menu in getRecs.orderDetail" :rawData="menu" :key="menu.menuId+menu.modifierIds.toString()"/>
    <q-layout-footer class="max-width-center-h">
      <q-toolbar color="secondary" class="row inline items-center">
        <q-btn label="Place Order" color="primary" icon="payment"/>
        <q-toolbar-title class="text-right">{{'$'+calculateOrderPrice}}</q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>
  </q-page>
</template>
<script>
import _d from 'lodash'
import orderMenuDetail from '../components/OrderMenuDetail'
import {mapGetters} from 'vuex'
export default {
  components: {
    orderMenuDetail,
  },
  computed: {
    ...mapGetters('customerorder', ['getRecs']),
    calculateOrderPrice() {
      return _d.sumBy(this.getRecs.orderDetail, 'price')
    },
  },
  methods: {
    backToCategoriesMenus() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="stylus" scoped>
</style>
