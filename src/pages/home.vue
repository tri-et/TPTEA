<template >
  <news>
    <news-details></news-details>
  </news>
</template>
<script>
import news from '../components/news'
import newsDetails from '../components/newsDetails'
export default {
  name: 'PageIndex',
  components: {
    news,
    newsDetails,
  },
}
</script>
<style>
</style>
