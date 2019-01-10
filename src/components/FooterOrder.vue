<template>
  <q-layout-footer class="max-width-center-h">
    <q-toolbar color="secondary" class="row inline items-center">
      <div class="quantity">{{quantity}}</div>
      <q-btn :disabled="totalPrice===0" label="View Carts" color="primary" class="absolute-center" icon="shopping_cart" @click="openViewCard()"/>
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
    openViewCard() {
      this.$router.push('/order/order-details')
    },
  },
}
</script>
<style lang="stylus" scoped>
.quantity
  border 1px solid #fff
  width 22px
  height 22px
  font-size 15px
  display flex
  align-items center
  justify-content center
</style>
