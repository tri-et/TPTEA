import {_post, _procError, _procAlert, _alert} from '../../util/common'
export const placeOrder = ({commit, getters}) => {
  if (getters.getRecs.customerId) {
    commit('setIsLoading', true)
    _post(
      {
        ...getters.getRecs,
        placeOrderMethod: getters.getPlaceOrderMethod,
      },
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
  } else _alert('Please login first!', 'warning')
}
