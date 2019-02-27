<template>
  <q-page>
    <q-layout-header class="max-width-center-h">
      <q-toolbar class="q-pt-none q-pb-none" color="secondary">
        <q-btn color="white" flat round dense icon="reply" @click="backToCategories()"/>
        <q-toolbar-title>{{cat.name}}</q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="q-pt-none" color="secondary">
        <q-search class="full-width" v-model="search" inverted color="none"/>
      </q-toolbar>
    </q-layout-header>
    <et-menu :menus="filterMenu"></et-menu>
    <footer-order/>
  </q-page>
</template>

<script>
import {mapGetters} from 'vuex'
import etMenu from 'components/Menu'
import footerOrder from 'components/FooterOrder'
export default {
  data() {
    return {
      opened: true,
      search: '',
      cat: {},
      menus: [],
    }
  },
  components: {
    etMenu,
    footerOrder,
  },
  computed: {
    ...mapGetters('category', ['getCategoriesData']),
    ...mapGetters('menu', ['getMenusData']),
    filterMenu() {
      if (this.menus != null) {
        return this.menus.filter(({name}) => name.match(new RegExp(this.search, 'gi')))
      }
    },
  },
  methods: {
    backToCategories() {
      this.menus = []
      this.$router.go(-1)
    },
  },
  mounted() {
    this.cat = this.getCategoriesData.find(item => item.id === parseInt(this.$route.params.catId))
    this.menus = this.getMenusData.filter(({categoryId}) => categoryId === this.cat.id)
  },
}
</script>
<style scoped lang="stylus">
@import '~variables'

.text-white:hover
  background-color $secondary
</style>
