import {_procError, _ax, _post, _alert} from '../../util/common'

export function loginAdmin({commit}, payload) {
  commit('setIsLoading', true)
  _post(
    payload,
    `mutation ($input: AdminLoginInput) {
      loginAdmin(input: $input)
    }`
  )
    .then(({data}) => {
      commit('setIsLoading', false)
      if (data.errors) _alert(data.errors[0].message, 'warning')
      else {
        // Login successfully
        localStorage.setItem('auth-token', data.loginAmin)
        commit('setToken', data.login)
        _ax.defaults.headers.common['Authorization'] = 'Bearer ' + data.loginAmin
        _alert(`Logged In Successfully!`, 'positive')
        this.$router.push('/admin')
      }
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}
