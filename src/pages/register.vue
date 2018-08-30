<template>
  <q-card square class="et-login center">
    <q-card-media>
      <svg class="center" id="logo" viewBox="0 0 483 483" width="128px" height="128px" v-html="getLoginLogo">
      </svg>
    </q-card-media>
    <q-card-title class="text-brown-6">
      TP@Tea HongKong
      <div slot="right" class="row items-center">
        <q-icon name="card_membership" class="q-mr-sm" @click="alert()" />Memberships
      </div>
    </q-card-title>
    <q-card-main class="q-mb-md">
      <q-input clearable v-model="username" float-label="User name" class="q-mb-lg" color="light-green-9" @blur="$v.username.$touch" :error="$v.username.$error" />
      <q-input v-model="password" float-label="Password" class="q-mb-lg" color="red-9" type="password" @blur="$v.password.$touch" :error="$v.password.$error" />
      <q-input v-model="passwordConfirm" float-label="Password Confirm" color="red-9" type="password" @blur="$v.passwordConfirm.$touch" :error="$v.passwordConfirm.$error" />
      <!-- <q-list separator /> -->
      <q-collapsible icon="more" label="Input More info" style="margin-top:10px 0 0 0; padding: 0" left>
        <q-input clearable v-model="fullName" float-label="Full name" class="q-mb-lg" color="light-green-9" />
        <q-input clearable v-model="phone" float-label="Phone" class="q-mb-lg" color="light-green-9" />
        <q-input clearable v-model="addr" float-label="Address" class="q-mb-lg" color="light-green-9" />
      </q-collapsible>
    </q-card-main>
    <q-card-actions>
      <div class="row justify-center" style="height:30px;width:100%;">
        <q-btn :loading="getIsLoading" color="amber-3" label="Register" class="text-brown-6 q-ma-sm col-10" @click="registerCustomer({username,password})">
          <q-spinner-pie slot="loading" size="25px" />
        </q-btn>
      </div>
    </q-card-actions>
  </q-card>
</template>
<script>
import logoData from '../assets/logoData'
import {mapGetters} from 'vuex'
import {required, email} from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      logo: 'Digitalizer',

      username: '',
      password: '',
      passwordConfirm: '',
      fullName: '',
      phone: '',
      addr: '',
      email: '',
    }
  },
  validations: {
    email: {required, email},
    username: {required},
    password: {required},
    passwordConfirm: {required},
  },
  computed: {
    getLoginLogo() {
      return logoData[this.logo]
    },
    ...mapGetters('customer', ['getIsLoading']),
  },
  methods: {
    registerCustomer() {
      this.$v.$touch()
      if (this.$v.$error) {
        this.$q.notify('Please review fields again.')
        return 0
      }
    },
  },
}
</script>
