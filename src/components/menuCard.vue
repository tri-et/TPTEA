<template>
  <div class="col-6" @click="fetchSubMenuCategory(item.id)">
    <q-card @click.native="show" inline style="border-radius: 8px">
      <q-card-media overlay-position="top">
        <img src="assets/menu/img-item-1.jpg">
        <q-card-title slot="overlay">
          <div slot="subtitle" class="text-right">{{item.name}}</div>
        </q-card-title>
      </q-card-media>
    </q-card>
    <slot></slot>
  </div>
</template>
<script>
import _ from 'lodash'
import {mapActions} from 'vuex'
export default {
  props: {
    item: [Object],
  },
  methods: {
    ...mapActions('order', ['fetchSubMenuCategory']),
    show() {
      if (!_.isEmpty(this.$slots)) {
        this.$slots.default[0].componentInstance.opened = true
      }
    },
  },
}
</script>

<style scoped>
</style>
