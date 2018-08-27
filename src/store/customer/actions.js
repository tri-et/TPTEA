import {_procError, _ax, _post, _alert} from '../../util/common'
import router from '../../router'

export const loginUser = ({commit}, payload) => {
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
        _alert(`Đăng Nhập Thành Công!`, 'positive')
        router.push('/')
      }
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}
