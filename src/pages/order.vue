<template>
  <q-page class="row gutter-xs content-start" style="padding:8px">
    <menu-category v-for="(item,index) in getMenuCategory" :item="item" :key="`menu${index}`">
    </menu-category>
  </q-page>
</template>
<script>
import menuCategory from '../components/menuCategory'
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    menuCategory,
  },
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
</style>
