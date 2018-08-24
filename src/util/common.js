export function isAuth() {
  return !!localStorage.getItem('auth-token')
}
