import {_procError, _ax, _post, _alert} from '../../util/common'

export function loginCustomer({commit}, payload) {
  commit('setIsLoading', true)
  _post(
    payload,
    `mutation ($input: LoginInput) {
      login(input: $input)
    }`
  )
    .then(({data}) => {
      commit('setIsLoading', false)
      if (data.errors) _alert(data.errors[0].message, 'warning')
      else {
        // Login successfully
        localStorage.setItem('auth-token', data.login)
        commit('setToken', data.login)
        _ax.defaults.headers.common['Authorization'] = 'Bearer ' + data.login
        _alert(`Logged In Successfully!`, 'positive')
        this.$router.push('/customer')
      }
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}

export function regCustomer({commit}, payload) {
  commit('setIsLoading', true)
  _post(
    payload,
    `mutation ($input: RegInput) {
      reg(input: $input)
    }`
  )
    .then(({data}) => {
      commit('setIsLoading', false)
      if (data.errors) _alert(data.errors[0].message, 'warning')
      else {
        // register successfully
        localStorage.setItem('auth-token', data.reg)
        commit('setToken', data.reg)
        _ax.defaults.headers.common['Authorization'] = 'Bearer ' + data.reg
        _alert(`Regitered Successfully!`, 'positive')
        this.$router.push('/customer')
      }
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}

export function loginCustumerFB({commit}, payload) {
  _post(
    payload,
    `mutation ($input: LoginInput) {
      loginFB(input: $input)
    }`
  )
    .then(({data}) => {
      if (data.errors) _alert(data.errors[0].message, 'warning')
      else {
        // Login successfully
        localStorage.setItem('auth-token', data.loginFB)
        commit('setToken', data.loginFB)
        _ax.defaults.headers.common['Authorization'] = 'Bearer ' + data.loginFB
        _alert(`Logged In Successfully!`, 'positive')
        this.$router.push('/customer')
      }
    })
    .catch(err => {
      _procError(err)
    })
}

export function regCustomerFB({commit}, payload) {
  _post(
    payload,
    `mutation ($input: RegInput) {
      regFB(input: $input) {
        token
        msg
      }
    }`
  )
    .then(({data}) => {
      if (data.errors) _alert(data.errors[0].message, 'warning')
      else {
        // register successfully
        localStorage.setItem('auth-token', data.regFB.token)
        commit('setToken', data.regFB)
        _ax.defaults.headers.common['Authorization'] = 'Bearer ' + data.regFB.token
        _alert(data.regFB.msg, 'positive')
        this.$router.push('/customer')
      }
    })
    .catch(err => {
      _procError(err)
    })
}
