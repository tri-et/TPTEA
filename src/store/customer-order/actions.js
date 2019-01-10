import {_post, _procError, _procAlert} from '../../util/common'

export const placeOrder = ({commit, getters}) => {
  commit('setIsLoading', true)
  _post(
    getters.getRecs,
    `mutation ($input: OrderInput) {
      placeOrder(input: $input)
    }`
  )
    .then(({data}) => {
      _procAlert(data, true)
      commit('setRecs', {})
      commit('setIsLoading', false)
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}
