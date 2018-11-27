<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    ServiceWorkerGlobalScope.onmessage = function(MessageEvent) {
      console.log(MessageEvent)
    }
  },
}
</script>

<style lang="stylus">
#q-app
  -webkit-overflow-scrolling touch
</style>
