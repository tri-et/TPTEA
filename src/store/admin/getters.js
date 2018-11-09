export const getIsAuth = state => !!state.token

export const getIsLoading = state => {
  return state.isLoading
}

export const getAdmin = state => {
  return state.admin
}

export const getIsOpenDialog = state => {
  return state.isOpenDialog
}

export const getReceived = state => {
  return state.received
}

export const getIsDisable = state => {
  return state.isDisable
}
