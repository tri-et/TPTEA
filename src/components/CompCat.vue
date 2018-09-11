<template>
  <q-card class="col-6 q-pa-xs no-shadow" style="border-radius: 8px">
    <q-card-media overlay-position="top">
      <img :src="cat.img">
      <q-card-title slot="overlay" class="text-right">
        {{cat.name}}
      </q-card-title>
    </q-card-media>
  </q-card>
</template>
<script>
export default {
  props: {
    cat: [Object],
  },
}
</script>
<style scoped>
</style>
