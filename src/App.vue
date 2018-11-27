<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    self.addEventListener('message', messageEvent => {
      console.log(messageEvent)
    })
  },
}
</script>

<style lang="stylus">
#q-app
  -webkit-overflow-scrolling touch
</style>
