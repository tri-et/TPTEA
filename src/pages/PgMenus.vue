<template>
  <div>
    <q-modal @hide="changeRouteToMenusListing" v-model="opened">
      <h4>Basic Modal</h4>
      <q-btn
        color="primary"
        @click="opened = false"
        label="Close"
      />
    </q-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: true,
    }
  },
  methods: {
    changeRouteToMenusListing() {
      this.$router.push('/categories')
    },
  },
  mounted() {
    console.log('PgMenus mounted!!!' + this.$route.params.catId)
  },
}
</script>
