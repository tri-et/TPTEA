<template>
  <gift-card :giftCard="test"></gift-card>
</template>
<script>
import giftCard from '../components/GiftCard'
export default {
  data() {
    return {
      test: {
        id: 10,
        amount: 20,
        code: 'eyJhbGciOiJIUzI1NiJ9.MTA.MNFcL5c5atAaMw6WJMF-2n8TVBJ2aNvp1TbYWkbsqcU',
        expiry: 50,
        createAt: '2018-11-01 07:22:07',
      },
    }
  },
  components: {
    giftCard,
  },
}
</script>
<style lang="stylus" scoped>
</style>
