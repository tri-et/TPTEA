<template>
  <q-page class="row gutter-xs content-start" style="padding:8px">
    <div class="col-6" v-for="(item,index) in getMenuCategory" :key="`menucat${index}`" @click="show(item.id)">
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
  </q-page>
</template>
<script>
// import _ from 'lodash'
import {mapActions, mapGetters} from 'vuex'
export default {
  // @click="fetchSubMenuCategory(item.id)"
  props: {
    item: [Object],
  },
  computed: {
    ...mapGetters('order', ['getMenuCategory']),
  },
  methods: {
    ...mapActions('order', ['fetchSubMenuCategory', 'fetchMenuCategory']),
    show(id) {
      // if (!_.isEmpty(this.$slots)) {
      //   this.$slots.default[0].componentInstance.opened = true
      // }
      this.$router.push({
        name: 'catlisting',
        params: {
          id: id,
        },
      })
    },
  },
  mounted() {
    this.fetchMenuCategory()
    console.log()
  },
}
</script>

<style scoped>
</style>
