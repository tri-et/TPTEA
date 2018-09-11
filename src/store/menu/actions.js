/*
export function someAction (context) {
}
*/

import {_get, _procError} from '../../util/common'

export const fetchMenu = ({commit}, payload) => {
  _get(`{
    listMenus(input: {
      id:${payload.id}
    }) {
      id
      name
      desc
      price
      img
    }
  }`)
    .then(({data}) => {
      commit('setRecsMenu', data.listMenus)
    })
    .catch(err => {
      _procError(err)
    })
}
