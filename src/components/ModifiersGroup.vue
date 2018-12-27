<template>
  <div>
    <div class="title-modify">{{groupTitle}}</div>
    <q-list inset-separator class="q-pa-none listing-modifier">
      <q-item v-for="(modifier,index) in data" :key="index">
        <q-item-main class="text-secondary">
          <q-radio v-if="groupType==='radio'" v-model="modifiers" :val="modifier" :label="modifier.name" color="primary"/>
          <q-checkbox v-else v-model="modifiers" :label="modifier.name" :val="modifier" color="primary"/>
        </q-item-main>
        <q-item-side right class="text-secondary">{{modifier.price|price}}</q-item-side>
      </q-item>
    </q-list>
  </div>
</template>
<script>
export default {
  props: {
    groupTitle: String,
    groupType: String,
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      modifiers: [],
    }
  },
  filters: {
    price(val) {
      var price = ''
      if (val.includes('-')) {
        price = '-$' + val.replace('-', '')
      } else if (val === '0') {
        price = ''
      } else {
        price = '+$' + val
      }
      return price
    },
  },
}
</script>
<style lang="stylus" scoped>
.title-modify
  background #f2f2f2
  padding 15px 0 5px 18px
  font-weight bold
  text-transform capitalize

.listing-modifier
  border-left none
  border-right none

.q-item-division + .q-item-division:after, .q-item-division + .q-item-inset-separator:after
  left 20px
  right 20px
</style>
