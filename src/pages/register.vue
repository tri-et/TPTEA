<template>
  <q-page padding class="docs-input row justify-center">
    <div style="width: 500px; max-width: 90vw;">
      <q-input v-model="form.username" @blur="$v.form.username.$touch" :error="$v.form.username.$error" float-label="User name" />
      <q-input v-model="form.password" @blur="$v.form.password.$touch" :error="$v.form.password.$error" float-label="Password" />
      <q-input v-model="form.email" @blur="$v.form.email.$touch" @keyup.enter="submit" :error="$v.form.email.$error" />
      <q-btn color="primary" margin @click="submit" style="margin:10px">Submit</q-btn>
    </div>
  </q-page>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        passwordConfirm: '',
        FullName: '',
        Phone: '',
        email: '',
      },
    }
  },
  validations: {
    form: {
      email: {required, email},
      username: {required},
      password: {required},
      passwordConfirm: {required},
    },
  },
  methods: {
    submit() {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.')
        return 0
      }
    },
  },
}
</script>
