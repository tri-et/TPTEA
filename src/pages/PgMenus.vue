<template>
  <q-modal v-model="opened">
    <h4>Basic Modal</h4>
    <q-btn
      color="primary"
      @click="opened = false"
      label="Close"
    />
  </q-modal>
</template>

<script>
export default {
  data() {
    return {
      opened: true,
    }
  },
}
</script>
