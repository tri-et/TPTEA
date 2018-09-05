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
        name
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
      id
      name
      desc
      img
    }
  }`).then(({data}) => {
    commit('setRecsMenucategory', data.listMenuCategory)
  })
}

export const fetchSubMenuCategory = ({commit}, categoryId) => {
  _get(`{
    listSubMenuCategory(input:${categoryId}) {
      id
      subMenu {
        id
        name
        price
      }
    }
  }`).then(({data}) => {
    commit('setRecsSubMenu', data.listSubMenuCategory[0])
  })
}
