import {_get, _procError} from '../../util/common'

export const fetchOrderHistory = ({commit}) => {
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
      commit('setRecsOrderHistory', data.listOrderHistory)
    })
    .catch(err => {
      _procError(err)
    })
}

export const fetchMenuCategory = ({commit}) => {
  _get(`{
    listMenuCategory {
      name
      desc
      img
    }
  }`).then(({data}) => {
    commit('setRecsMenucategory', data.listMenuCategory)
  })
}
