/*
export function someAction (context) {
}
*/
import {_post, _get, _procError} from '../../util/common'

export const fetchRecs = ({commit}, payload) => {
  _post(
    payload,
    `query ($input: Int) {
      listCategories(input: $input) {
        id
        name
        desc
        img
      }
    }`
  )
    .then(({data}) => {
      commit('setRecs', data.listCategories)
    })
    .catch(err => {
      _procError(err)
    })
}
export const fetchCategorys = ({commit}) => {
  commit('setIsLoading', true)
  _get(`{
    fetchAllCategoriesAdmin {
      id
      name
      desc
      img
      nameMainCategory
      mainCategoryId
    }
  }`)
    .then(({data}) => {
      commit('setRecs', data.fetchAllCategoriesAdmin)
      commit('setIsLoading', false)
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}
