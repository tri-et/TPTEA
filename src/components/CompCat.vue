<template>
  <div class="col-6">
    <q-card inline style="border-radius: 8px">
      <q-card-media overlay-position="top">
        <img :src="cat.img">
        <q-card-title slot="overlay">
          <div slot="subtitle" class="text-right">{{cat.name}}</div>
        </q-card-title>
      </q-card-media>
    </q-card>
  </div>
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
