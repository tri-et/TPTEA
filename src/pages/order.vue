<template>
  <!-- <q-page class="row gutter-xs content-start" style="padding:8px"> -->
    <!-- <menu-cat v-for="(item,index) in getMenuCategory" :item="item" :key="`menu${index}`">
      <menu-cat-listing :catName="item.name" :catId="item.id">
        <menu-cat-item-detail>
          <menu-detail :menudata="{}">
          </menu-detail>
        </menu-cat-item-detail>
      </menu-cat-listing>
    </menu-cat> -->
    <router-view></router-view>
  <!-- </q-page> -->
</template>
<script>
import menuCat from '../components/menuCat'
import menuCatListing from '../components/menuCatListing'
import menuCatItemDetail from '../components/menuCatItemDetail'
import menuDetail from '../components/menuDetail'
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    menuCat,
    menuCatListing,
    menuCatItemDetail,
    menuDetail,
  },
  computed: {
    ...mapGetters('order', ['getMenuCategory']),
  },
  methods: {
    ...mapActions('order', ['fetchMenuCategory']),
  },
  mounted() {
    // this.fetchMenuCategory()
  },
}
</script>

<style scoped>
</style>
