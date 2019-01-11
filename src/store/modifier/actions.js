import {_post, _get, _procError} from '../../util/common'
import _ from 'lodash'
export const fetchModifiers = ({commit}, payload) => {
  _post(
    payload,
    `query ($input: MenuInput) {
      fetchModifiers(input: $input) {
        data {
          id
          name
          price
          isDefault
        }
        groupType
        groupTitle
      }
    }`
  )
    .then(({data}) => {
      commit(
        'setRecs',
        _.sortBy(data.fetchModifiers, modifier => {
          return modifier.groupTitle
        })
      )
    })
    .catch(err => {
      _procError(err)
    })
}
export const fetchAllModifiers = ({commit}) => {
  _get(`{
    fetchAllModifiers {
      id
      name
      price
      isDefault
    }
  }`)
    .then(({data}) => {
      commit('setAllModifiers', data.fetchAllModifiers)
    })
    .catch(err => {
      _procError(err)
    })
}
