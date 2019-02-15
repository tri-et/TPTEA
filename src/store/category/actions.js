/*
export function someAction (context) {
}
*/
import {_post, _get, _procError, _procAlert} from '../../util/common'
import _d from 'lodash'
import store from '../index'
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
      commit('setRecs', data.fetchAllCategoriesAdmin.reverse())
      commit('setIsLoading', false)
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}

export function createCategory({commit, getters}) {
  commit('setIsLoading', true)
  _post(
    {...getters.getEditingRec, img: store().getters['util/getCurrentUploadImageData']},
    `mutation ($input: CategoryInput) {
      createCategory(input: $input) {
        id
        name
        desc
        img
        mainCategoryId
        nameMainCategory
      }
    }`
  )
    .then(({data}) => {
      commit('setIsLoading', false)
      _procAlert(data, true)
      commit('setIsModalOpened', false)
      store().commit('util/setCurrentUploadImageData', '')
      getters.getRecs.unshift(data.createCategory)
      commit('setRecs', _d.clone(getters.getRecs))
    })
    .catch(err => {
      _procError(err)
      commit('setIsLoading', false)
    })
}
export function delCategorys({commit, getters}) {
  commit('setIsLoading', true)
  let ids = Array.from(getters.getSelected, category => category.id)
  _post(
    ids,
    `mutation ($input: [Int]) {
      deleteCategories(input: $input)
    }`
  ).then(({data}) => {
    _procAlert(data, true)
    commit('setIsLoading', false)
    _d.remove(getters.getRecs, rec => {
      return ids.includes(rec.id)
    })
    commit('setSelected', [])
    commit('setRecs', _d.clone(getters.getRecs))
  })
}
export function updateCategory({commit, getters}) {
  commit('setIsLoading', true)
  let category = _d.omit(getters.getEditingRec, ['__index', 'nameMainCategory'])
  let imgUploadData = store().getters['util/getCurrentUploadImageData']
  if (imgUploadData !== '') {
    category.img = imgUploadData
  }
  _post(
    category,
    `mutation ($input: CategoryInput) {
      updateCategory(input: $input){
        id
        name
        desc
        img
        mainCategoryId
        nameMainCategory
      }
    }`
  ).then(({data}) => {
    _procAlert(data, true)
    commit('setIsLoading', false)
    _d.forEach(getters.getRecs, (category, index) => {
      if (category.id === data.updateCategory.id) {
        getters.getRecs[index] = data.updateCategory
        return false
      }
    })
    commit('setIsModalOpened', false)
    store().commit('util/setCurrentUploadImageData', '')
    commit('setRecs', _d.clone(getters.getRecs))
  })
}
