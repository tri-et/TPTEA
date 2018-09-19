import {_post, _procError} from '../../util/common'
import _ from 'lodash'

export const fetchModifiers = ({commit}, payload) => {
  _post(
    payload,
    `query ($input: MenuInput) {
      listModifies(input: $input) {
        id
        name
        price
        type
      }
    }`
  )
    .then(({data}) => {
      commit('setRecs', _.sortBy(data.listModifies, ['type']).reverse())
    })
    .catch(err => {
      _procError(err)
    })
}
