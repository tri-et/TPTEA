<template>
  <q-page class="row">
    <comp-cat v-for="(cat,index) in getRecsCategory" :key="index" :cat="cat"></comp-cat>
  </q-page>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import compCat from 'components/CompCat'
export default {
  name: 'PgCats',
  components: {
    compCat,
  },
  computed: {
    ...mapGetters('category', ['getRecsCategory']),
  },
  methods: {
    ...mapActions('category', ['fetchCategory']),
  },
  mounted() {
    this.fetchCategory()
  },
}
</script>
<style scoped>
</style>
