<template>
  <q-layout-footer class="max-width-center-h">
    <q-toolbar color="secondary" class="row inline items-center">
      <div class="quantity">2</div>
      <q-btn label="View Carts" color="primary" class="absolute-center" icon="shopping_cart" @click="openViewCard()"/>
      <q-toolbar-title class="text-right">$0</q-toolbar-title>
    </q-toolbar>
  </q-layout-footer>
</template>
<script>
export default {
  methods: {
    openViewCard() {
      this.$router.push('/order/view-card')
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
