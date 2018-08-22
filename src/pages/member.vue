<template>
  <div>
    <component v-bind:is="currentComponent"></component>

  </div>
</template>
<script>
import formLogin from '../components/login.vue'
import formRegister from '../components/register.vue'
export default {
  name: 'PageMember',
  components: {
    'form-login': formLogin,
    'form-register': formRegister,
  },
  data() {
    return {
      currentComponent: formLogin,
    }
  },
  computed: {},
}
</script>
<style>
</style>
