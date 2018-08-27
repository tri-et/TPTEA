import {_get, _procError} from '../../util/common'

export const fetchRecs = ({commit}) => {
  // commit('setIsLoading', true)
  _get(`{
    listMember {
      id
      name
      add
      phone
      balance
      points
    }
  }`)
    .then(({data}) => {
      // _procAlert(data)
      commit('setRecs', data.listMember[0])
      // commit('setIsLoading', false)
    })
    .catch(err => {
      _procError(err)
      // commit('setIsLoading', false)
    })
}

export const fetchOrderHistory = ({commit}) => {
  // commit('setIsLoading', true)
  _get(`{
    listOrderHistory {
      customerId
      createdAt
      OrderDetails {
        orderId
        menuId
        quantity
        price
        menuname
        menu {
          name
        }
      }
    }
  }`)
    .then(({data}) => {
      // _procAlert(data)
      commit('setRecs', data.listOrderHistory)
    })
    .catch(err => {
      _procError(err)
      // commit('setIsLoading', false)
    })
}
