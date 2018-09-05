<template>
  <q-modal v-model="opened" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
    <q-modal-layout>
      <q-toolbar slot="header" color="brown-6">
        <q-btn flat round dense @click="opened = false" icon="reply" />
        <q-toolbar-title>
          {{menuCategory.name}}
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar slot="header" color="brown-6">
        <q-search class="full-width" v-model="search" inverted color="none" />
      </q-toolbar>
      <q-toolbar slot="footer" color="brown-6" class="row inline items-center">
        <div class="col-6" @click="show()">
          <q-btn label="View Carts" />
        </div>
        <div class="col-6 text-right">{{totalSpent()}}</div>
      </q-toolbar>
      <div>
        <q-list no-border separator>
          <menu-card-item v-for="(item,index) in filterSubMenu" :submenu="item" :key="`submenu${index}`"></menu-card-item>
        </q-list>
      </div>
      <slot></slot>
    </q-modal-layout>
  </q-modal>
</template>
<script>
import _ from 'lodash'
import {mapGetters} from 'vuex'
import menuCardItem from './menuCardItem'
export default {
  props: {
    menuCategory: [Object],
  },
  components: {
    menuCardItem,
  },
  data() {
    return {
      search: '',
      opened: false,
    }
  },
  computed: {
    ...mapGetters('order', ['getSubMenu', 'getRecsOrdered']),
    filterSubMenu() {
      if (this.getSubMenu.subMenu != null) {
        return this.getSubMenu.subMenu.filter(({name}) => {
          return name.match(new RegExp(this.search, 'gi'))
        })
      }
    },
  },
  filters: {
    totaPrice(val) {
      return '$' + _.sumBy(val, 'price')
    },
  },
  methods: {
    show() {
      this.$slots.default[0].componentInstance.opened = true
    },
    totalSpent() {
      var total = 0
      _.forEach(this.getRecsOrdered, ({price, quantity}) => {
        total += parseInt(price) * quantity
      })
      return `Total: $${total}`
    },
  },
  watch: {
    getRecsOrdered: {
      handler(val) {
        this.totalSpent()
      },
      deep: true,
    },
  },
}
</script>
<style scoped>
.q-toolbar {
  min-height: 42px !important;
}
</style>
