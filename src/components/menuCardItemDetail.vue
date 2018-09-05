<template>
  <q-modal v-model="opened" :content-css="{minWidth: '50vw'}">
    <q-modal-layout>
      <q-toolbar slot="header" color="brown-2 row">
        <div @click="opened=false" class="col-1">
          <i aria-hidden="true" class="q-icon material-icons clsIcon">close</i>
        </div>
        <div class="q-mr-md col-11 text-center">Your Cart</div>
      </q-toolbar>
      <q-table :data="getRecsOrdered" :columns="getCols" row-key="name" class="no-shadow">
        <span slot="top" slot-scope="props">Order Details</span>
        <q-td slot="body-cell-price" slot-scope="props" :props="props">
          <span>{{ `$${props.row.quantity*props.value}` }}</span>
        </q-td>
        <div slot="bottom" slot-scope="props" :props="props" key="price" class="row fit text-brown">
          <div style="width:80%;font-weight:700">Total</div>
          <div style="padding-left:14px;font-weight:700">{{`$${totalpay}`}}</div>
        </div>
      </q-table>
      <div class="row">
        <div class="col-12 text-center">
          <q-btn icon="payment" text-color="brown" rounded label="Confirm Order" />
        </div>
      </div>
      <q-input v-model="number" type="number" numeric-keyboard-toggle />
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
}
</script>
<style scoped>
</style>
