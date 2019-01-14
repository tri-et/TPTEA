import {_get, _procError} from '../../util/common'
export const fetchRecs = ({commit}) => {
  _get(`{
    fetchAllStores {
      id
      name
      address
      phone
      lat
      lng
    }
  }`)
    .then(({data}) => {
      commit('setRecs', data.fetchAllStores)
    })
    .catch(err => {
      _procError(err)
    })
}
