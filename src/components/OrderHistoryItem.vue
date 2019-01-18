<template>
  <div class="order-item">
    <q-item>
      <q-item-side :icon="rawData.isStorePickup?'store':'local_shipping'"/>
      <q-item-main>
        <q-item-tile label class="text-weight-bold" text-color="primary">{{rawData.address}}</q-item-tile>
        <q-item-tile sublabel>{{rawData.statusName}}</q-item-tile>
        <q-item-tile sublabel text-color="secondary">12:26 13/01/2019</q-item-tile>
      </q-item-main>
      <q-item-side class="text-weight-bold">{{'$'+rawData.totalAmount}}</q-item-side>
    </q-item>
  </div>
</template>
<script>
export default {
  props: {
    rawData: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style lang="stylus" scoped>
.order-item
  border-radius 10px
  margin 0px 20px 20px 20px
  box-shadow 2px 3px 4px 1px #ccc
</style>
