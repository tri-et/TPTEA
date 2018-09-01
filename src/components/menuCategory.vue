<template>
  <div class="col-6">
    <q-card @click.native="show" inline style="border-radius: 8px">
      <q-card-media overlay-position="top">
        <img :src="item.img">
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
export default {
  props: {
    item: [Object],
  },
  methods: {
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
