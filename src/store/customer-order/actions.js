import {_post, _procError, _procAlert, _alert} from '../../util/common'
import store from '../index'
import _d from 'lodash'
export const placeOrder = ({commit, getters}) => {
  let customer = store().getters['customer/getCustomer']
  if (!_d.isEmpty(customer)) {
    commit('setIsLoading', true)
    _post(
      {
        ...getters.getRecs,
        customerId: customer.id,
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
