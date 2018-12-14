<template>
  <div class="push-msg q-pt-md">
    <q-input v-model="msgPush" type="textarea" placeholder="Push Message" rows="2"/>
    <q-btn :disable="msgPush==''" class="q-mt-md" label="Push Message" color="secondary" @click="pushMessage(msgPush)"/>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      msgPush: '',
    }
  },
  methods: {
    ...mapActions('admin', ['pushMessage']),
  },
}
</script>
<style lang="stylus" scoped>
.push-msg
  width 280px
  margin auto
  text-align center
</style>
