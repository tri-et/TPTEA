<template>
  <q-modal v-model="opened" :content-css="{minWidth: '50vw'}">
    <q-modal-layout>
      <q-toolbar slot="header" color="brown-6 row">
        <div @click="opened=false" class="col-1">
          <i aria-hidden="true" class="q-icon material-icons clsIcon">close</i>
        </div>
        <div class="q-mr-md col-11 text-center">Your Cart</div>
      </q-toolbar>
      <q-list separator class="q-pa-none">
        <q-list-header>Order Details</q-list-header>
        <q-item v-for="(item,index) in getRecsOrdered" :key="`menudetail${index}`" @click.native="show()">
          <q-item-side>
            <q-item-tile>
              <q-chip small color="brown">{{item.quantity}}</q-chip>
            </q-item-tile>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>{{item.name}}</q-item-tile>
            <q-item-tile sublabel>Size Small (355 ml)</q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-item-tile>{{`$${item.totalprice}`}}</q-item-tile>
          </q-item-side>
          <slot></slot>
        </q-item>
      </q-list>
      <div class="row q-mt-md">
        <div class="col-12 text-center">
          <q-btn icon="payment" text-color="brown" rounded label="Confirm Order" />
        </div>
      </div>
    </q-modal-layout>
  </q-modal>
</template>
<script>
import _ from 'lodash'
import {mapGetters} from 'vuex'
export default {
  data: () => ({
    number: 0,
    min: 1,
    max: 1017,
    opened: false,
  }),
  computed: {
    ...mapGetters('member', ['getCols']),
    ...mapGetters('order', ['getRecsOrdered']),
    totalpay() {
      return _.sumBy(this.getRecsOrdered, ({quantity, price}) => {
        return quantity * price
      })
    },
  },
  methods: {
    show() {
      this.$slots.default[0].componentInstance.opened = true
    },
  },
}
</script>
<style scoped>
</style>
