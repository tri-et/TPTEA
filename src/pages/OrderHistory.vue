<template>
  <q-page class="q-pt-md">
    <q-layout-header class="max-width-center-h">
      <q-toolbar class="q-pt-none q-pb-none" color="secondary">
        <q-btn color="white" flat round dense icon="reply" @click="back()"/>
        <q-toolbar-title>Order History</q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <order-history-item v-for="(item,index) in order" :rawData="item" :key="index"/>
  </q-page>
</template>
<script>
import orderHistoryItem from '../components/OrderHistoryItem'
export default {
  data() {
    return {
      order: [
        {
          address: 'Shop No. C1, G/F, World-Wide House, No.19 Des Voeux Road Central, Hong Kong',
          isStorePickup: true,
          totalAmount: 40,
          orderDateTime: '2019-01-16 02:42:05',
          statusName: 'Finished',
        },
        {
          address: 'G/F, No. 20, Hoi Kwong Street, Quary Bay, Hong Kong',
          isStorePickup: false,
          totalAmount: 10,
          orderDateTime: '2019-01-16 02:42:05',
          statusName: 'On Way',
        },
        {
          address: 'Shop No. 6, G/F, Foo Tat Building, 50 Soy Street, Mongkok, Kowloon, Hong Kong',
          isStorePickup: false,
          totalAmount: 60,
          orderDateTime: '2019-01-16 02:42:05',
          statusName: 'Processing',
        },
        {
          address: 'Shop 56, UG, Zhonggang City, 33 Canton Road, Tsim Sha Tsui(China Hong Kong City)',
          isStorePickup: true,
          totalAmount: 72.6,
          orderDateTime: '2019-01-16 02:42:05',
          statusName: 'Processing',
        },
      ],
    }
  },
  components: {
    orderHistoryItem,
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="stylus" scoped>
</style>
