export default {
  token: localStorage.getItem('auth-token') || '',
  isLoading: false,
  admin: {},
  isOpenDialog: false,
  received: {},
  isDisable: false,
}
