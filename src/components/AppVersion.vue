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
      let textChangeLog = await this.$axios.get('CHANGELOG.md').then(({data}) => {
        return data
      })
      if (textChangeLog) this.version = `v${textChangeLog.match(/##\s.*\d{4}-\d{1,2}-\d{1,2}\b/)[0].replace(/#|\s|-|\d{4}-\d{1,2}-\d{1,2}/g, '')}`
    },
  },
  mounted() {
    this.readVersion()
  },
}
</script>
