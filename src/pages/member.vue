<template>
  <div>
    <component v-bind:is="currentComponent"></component>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import formLogin from '../components/login.vue'
import formRegister from '../components/register.vue'
import formMember from '../components/member.vue'
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
  computed: {
    ...mapGetters('member', ['getIsReq', 'getIsAuth']),
  },
  created() {
    if (this.getIsAuth) {
      this.currentComponent = formMember
    } else {
      if (this.getIsReq) {
        this.currentComponent = formRegister
      } else {
        this.currentComponent = formLogin
      }
    }
  },
}
</script>
<style>
</style>
