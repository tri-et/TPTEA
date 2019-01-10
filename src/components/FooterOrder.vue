<template>
  <q-layout-footer class="max-width-center-h">
    <q-toolbar color="secondary" class="row inline items-center">
      <q-btn :disabled="quantity===0" label="View Carts" color="primary" class="absolute-center" icon="shopping_cart" @click="openViewCart()">
        <q-chip v-show="quantity>0" floating color="brown-8">{{quantity}}</q-chip>
      </q-btn>
      <q-toolbar-title class="text-right">{{'$'+totalPrice}}</q-toolbar-title>
    </q-toolbar>
  </q-layout-footer>
</template>
<script>
import _d from 'lodash'
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters('customerorder', ['getRecs']),
    totalPrice() {
      return _d.sumBy(this.getRecs.orderDetails, 'price')
    },
    quantity() {
      return _d.sumBy(this.getRecs.orderDetails, 'quantity')
    },
  },
  methods: {
    openViewCart() {
      this.$router.push('/order/order-details')
    },
  },
}
</script>
<style lang="stylus" scoped>
</style>
