<template>
  <div>
    <q-toolbar color="primary" class="q-pr-md q-pt-none q-pb-none q-pl-none">
      <q-btn icon="clear" flat round/>
      <div class="quantity">2</div>
      <q-toolbar-title class="text-weight-regular q-subheading">Milk Tea with Pearls & Mixed Nuts</q-toolbar-title>
      <label>$7</label>
    </q-toolbar>
    <q-list no-border class="q-ml-md">
      <q-item class="q-ml-xl">
        <q-item-main label="White Pearis" label-lines="1"/>
        <q-item-side right class="text-secondary">$1</q-item-side>
      </q-item>
      <q-item class="q-ml-xl">
        <q-item-main label="Pearls" label-lines="1"/>
        <q-item-side right class="text-secondary">$2</q-item-side>
      </q-item>
      <q-item class="q-ml-xl">
        <q-item-main label="More Lemon" label-lines="1"/>
        <q-item-side right class="text-secondary">$2</q-item-side>
      </q-item>
    </q-list>
    <div class="total-price text-secondary bg-brown-1">
      <label>Price</label>
      <label>2 x $12</label>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus" scoped>
.q-toolbar
  min-height 42px !important

.quantity
  width 20px
  height 20px
  border 1px solid #fff
  font-size 14px
  display flex
  align-items center
  justify-content center

.total-price
  display flex
  padding 5px 16px
  align-items center

  label:first-child
    flex 1
    font-weight bold
    font-size 14px
</style>
