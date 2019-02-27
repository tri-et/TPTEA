<template>
  <q-page class="row gutter-xs category">
    <q-layout-header class="max-width-center-h">
      <q-toolbar class="q-pt-none q-pb-none" color="secondary">
        <q-btn color="white" flat round dense icon="reply" @click="backToMainCategory()"/>
        <q-toolbar-title>{{mainCategoryName}}</q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <et-category v-for="(cat,index) in categories" :key="index" :cat="cat"></et-category>
    <footer-order/>
  </q-page>
</template>
<script>
import {mapGetters} from 'vuex'
import etCategory from 'components/Category'
import footerOrder from 'components/FooterOrder'
export default {
  name: 'Categories',
  data() {
    return {
      mainCategoryName: '',
      categories: [],
    }
  },
  components: {
    etCategory,
    footerOrder,
  },
  computed: {
    ...mapGetters('category', ['getCategoriesData']),
    ...mapGetters('maincategory', ['getMainCategoriesData']),
  },
  methods: {
    backToMainCategory() {
      this.$router.go(-1)
    },
  },
  mounted() {
    let mainCatId = parseInt(this.$route.params.mainCatId)
    this.mainCategoryName = this.getMainCategoriesData.find(item => item.id === mainCatId).name
    this.categories = this.getCategoriesData.filter(({mainCategoryId}) => mainCategoryId === mainCatId)
  },
}
</script>
<style lang="stylus" scoped>
.category
  padding 12px 8px 8px 12px !important
</style>
