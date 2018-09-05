<template>
  <q-item class="q-pt-sm q-pb-sm">
    <q-item-side>
      <q-item-tile avatar>
        <img src="assets/menu/img-item-1.jpg">
      </q-item-tile>
    </q-item-side>
    <q-item-main>
      <q-item-tile label>{{submenu.name}}</q-item-tile>
      <q-item-tile sublabel>{{`$${submenu.price}`}}</q-item-tile>
    </q-item-main>
    <q-item-side right>
      <div class="row items-center justify-between no-wrap">
        <span v-show="counter!=0" class="q-pr-sm">{{counter}}</span>
        <q-btn size="14px" round dense color="brown" icon="remove" :disable="counter==0" @click="setRecsOrdered(false)" class="q-mr-sm" />
        <q-btn size="14px" round dense color="brown" icon="add" @click="setRecsOrdered(true)" class="q-mr-sm" />
      </div>
    </q-item-side>
  </q-item>
</template>
<script>
import _ from 'lodash'
import {mapMutations, mapGetters} from 'vuex'
export default {
  props: {
    submenu: [Object],
  },
  data() {
    return {
      counter: 0,
    }
  },
  computed: {
    ...mapGetters('order', ['getRecsOrdered']),
  },
  methods: {
    ...mapMutations({
      setRecsOrdered(dispatch, payload) {
        var tempOrder = this.getRecsOrdered
        var itemOrder = _.find(tempOrder, ['id', this.submenu.id])
        if (payload) {
          this.counter++
          if (itemOrder === undefined) {
            tempOrder.push(_.assign({quantity: this.counter}, this.submenu))
          } else {
            _.assign(itemOrder, {quantity: this.counter})
          }
        } else {
          this.counter--
          _.assign(itemOrder, {quantity: this.counter})
          tempOrder = _.clone(
            _.reject(tempOrder, ({quantity}) => {
              return quantity === 0
            })
          )
        }
        return dispatch('order/setRecsOrdered', tempOrder)
      },
    }),
  },
}
</script>
<style scoped>
.q-item-avatar,
.q-item-avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
