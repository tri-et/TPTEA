<template>
  <q-page class="row gutter-xs content-start" style="padding:8px">
    <menu-card v-for="(item,index) in getMenuCategory" :item="item" :key="`menu${index}`">
      <menu-card-listing :menuCategory="item">
        <menu-card-item-detail></menu-card-item-detail>
      </menu-card-listing>
    </menu-card>
  </q-page>
</template>
<script>
import menuCard from '../components/menuCard'
import menuCardListing from '../components/menuCardListing'
import menuCardItemDetail from '../components/menuCardItemDetail'
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    menuCard,
    menuCardListing,
    menuCardItemDetail,
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
