/*
export function someAction (context) {
}
*/
import {_get, _procError} from '../../util/common'

export const fetchMenuCategory = ({commit}) => {
  _get(`{
    listMenuCategory {
      id
      name
      desc
      img
    }
  }`)
    .then(({data}) => {
      commit('setRecsMenucategory', data.listMenuCategory)
    })
    .catch(err => {
      _procError(err)
    })
}
