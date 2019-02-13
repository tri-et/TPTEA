import _d from 'lodash'
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
