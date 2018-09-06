<template>
  <q-modal v-model="opened" :content-css="{minWidth: '48vw', minHeight: '86vh'}">
    <q-modal-layout>
      <q-toolbar slot="header" color="brown-6">
        <q-icon name="close" size="22px" @click.native="opened=false" />
      </q-toolbar>
      <q-card>
        <q-card-media>
          <img src="assets/menu/img-item-9.jpg">
          <q-card-title slot="overlay">
            {{menudata.name}}
            <span slot="subtitle">{{menudata.desc}}</span>
          </q-card-title>
        </q-card-media>
      </q-card>
      <div>
        <q-list separator class="q-pa-none">
          <q-list-header>Chose size</q-list-header>
          <q-item>
            <q-item-main class="text-grey-14">
              <q-radio v-model="chosesize" val="sm" label="Small (355 ml)" color="brown-14" />
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main class="text-grey-14">
              <q-radio v-model="chosesize" val="md" label="Medium (475 ml)" color="brown-14" />
            </q-item-main>
            <q-item-side right class="text-grey-14">
              {{`$${priceextra}`}}
            </q-item-side>
          </q-item>
        </q-list>
        <div class="row q-mt-md q-pb-xl justify-center">
          <q-btn-group rounded>
            <q-btn icon="remove" text-color="brown-6" :disable="counter===0" @click="remove()" />
            <q-btn :label="counter===0?'0':counter" />
            <q-btn icon="add" text-color="brown-4" @click="add()" />
          </q-btn-group>
        </div>
      </div>
      <q-toolbar slot="footer" color="brown-6 row">
        <div class="col-10 text-center" @click="setRecsOrdered">
          <q-btn icon="add_shopping_cart" flat label="Add To Cart" />
        </div>
        <div class="col-2">{{`+ $${totalprice}`}}</div>
      </q-toolbar>
    </q-modal-layout>
  </q-modal>
</template>
<script>
import _ from 'lodash'
import {mapMutations, mapGetters} from 'vuex'
export default {
  props: {
    menudata: [Object],
  },
  data: () => ({
    opened: false,
    chosesize: 'sm',
    counter: 0,
    totalprice: 0,
    priceextra: 2,
  }),
  computed: {
    ...mapGetters('order', ['getRecsOrdered']),
  },
  methods: {
    ...mapMutations({
      setRecsOrdered(dispatch, payload) {
        this.opened = false
        var tempOrder = this.getRecsOrdered
        tempOrder.push(_.assign({quantity: this.counter, totalprice: this.totalprice}, this.menudata))
        this.counter = 0
        this.totalprice = 0
        return dispatch('order/setRecsOrdered', tempOrder)
      },
    }),
    add() {
      this.counter++
      this.totalprice += parseInt(this.menudata.price) + (this.chosesize === 'sm' ? 0 : this.priceextra)
      console.log(this.menudata)
    },
    remove() {
      this.counter--
      this.totalprice -= parseInt(this.menudata.price) + (this.chosesize === 'sm' ? 0 : this.priceextra)
    },
    addToCart() {
      if (this.counter !== 0) {
        console.log('test')
      }
    },
  },
  watch: {
    chosesize(newValue) {
      if (newValue === 'md') {
        this.totalprice += this.counter * this.priceextra
      } else {
        this.totalprice -= this.counter * this.priceextra
      }
    },
  },
}
</script>
<style scoped>
.q-toolbar {
  min-height: 42px !important;
}
</style>
