<template>
  <small class="text-italic">{{version}}</small>
</template>
<script>
export default {
  data() {
    return {
      version: 'v0.0.0',
    }
  },
  methods: {
    async readVersion() {
      let data = await this.$axios.get('CHANGELOG.md').then(({data}) => {
        return data
      })
      if (data) this.version = 'v' + data.match(/##.\d.\d.\dz/)[0].replace(/#|z/g, '')
    },
  },
  mounted() {
    this.readVersion()
  },
}
</script>
