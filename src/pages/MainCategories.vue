<template>
  <q-page class="row">
    <main-category v-for="mainCat in getMainCategoriesData" :key="mainCat.id" :name="mainCat.name" :img="mainCat.img" :id="mainCat.id"/>
    <q-inner-loading dark :visible="getIsOrderSystemLoading">
      <q-spinner size="50px" color="white"/>
    </q-inner-loading>
  </q-page>
</template>
<script>
import {mapGetters} from 'vuex'
import mainCategory from 'components/MainCategory'
export default {
  name: 'MainCategories',
  components: {mainCategory},
  computed: {
    ...mapGetters('maincategory', ['getMainCategoriesData']),
    ...mapGetters('util', ['getIsOrderSystemLoading']),
  },
}
</script>
<style lang="stylus" scoped>
.q-card-media
  width 100%
  height 100%
  background-size cover
  background-position center
  font-size 70px
  font-weight bold
  color #fff

.q-card-media div
  height 100%
</style>
