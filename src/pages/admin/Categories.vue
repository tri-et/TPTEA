<template>
  <div>
    <et-grid type="category"/>
    <category-modal/>
  </div>
</template>
<script>
import etGrid from '../../components/EtGrid'
import categoryModal from '../../components/CategoryModal'
export default {
  components: {
    etGrid,
    categoryModal,
  },
}
</script>
<style lang="stylus" scoped>
</style>
