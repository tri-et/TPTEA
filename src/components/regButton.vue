<template>
  <div>
    <q-btn @click="hide" rounded color="green" to="/member/register" label="Join now" class="reg-button animate-pop" v-bind:class="{ hidden: hidden }" />
  </div>
</template>
<script>
export default {
  name: 'RegButton',
  props: {
    hidden: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {}
  },
  methods: {
    hide() {
      this.$emit('hide-button', true)
    },
  },
}
</script>
<style>
.animate-pop {
  text-transform: none;
  font-size: 14px !important;
  padding: 13px 25px;
  display: block;
}
.reg-button {
  position: fixed;
  z-index: 999999;
}
</style>
