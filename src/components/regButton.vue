<template>
  <div>
    <q-btn :v-model="false" style="position:fixed; z-index:999999" rounded color="green" to="/member/register" label="Join now" class="animate-pop" />
  </div>
</template>
<script>
export default {
  name: 'RegButton',
}
</script>
<style>
.animate-pop {
  text-transform: none;
  font-size: 14px !important;
  padding: 13px 25px;
  display: block;
}
</style>
