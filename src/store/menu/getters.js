export const getRecs = state => {
  return state.recs
}
export const getCounter = state => {
  return state.counter
}
export const getAllMenus = state => {
  return state.allMenus
}
export const getMenu = state => menuId => {
  return state.allMenus.find(({id}) => {
    return id === menuId
  })
}
