import _d from 'lodash'
import store from '../index'
export const setRecs = (state, payload) => {
  state.recs = payload
}
export const setIsLoading = (state, payload) => {
  state.isLoading = payload
}
export const setIsModalOpened = (state, payload) => {
  state.isModalOpened = payload
}
export const setEditingRec = (state, payload) => {
  state.editingRec = payload
  state.backupRec = _d.clone(payload)
  state.isModalOpened = true
}
export const setSelected = (state, payload) => {
  state.selected = payload
}
export const discardEditingRec = state => {
  _d.extend(state.editingRec, state.backupRec)
  state.isModalOpened = false
  store().commit('util/setCurrentUploadImageData', '')
}
export const setCategoriesData = (state, payload) => {
  state.categoriesData = payload
}
