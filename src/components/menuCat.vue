<template>
  <q-page class="row gutter-xs content-start et-menu-cat">
    <div class="col-6" v-for="(item,index) in getMenuCategory" :key="index">
      <q-card inline style="border-radius: 8px">
        <q-card-media overlay-position="top">
          <img :src="item.img">
          <q-card-title slot="overlay">
            <div slot="subtitle" class="text-right">{{item.name}}</div>
          </q-card-title>
        </q-card-media>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters('order', ['getMenuCategory']),
  },
  methods: {
    ...mapActions('order', ['fetchMenuCategory']),
  },
  mounted() {
    this.fetchMenuCategory()
  },
}
</script>
<style scoped>
.et-menu-cat {
  padding: 0 8px 8px 0;
  max-width: 560px;
  margin: auto;
}
</style>
