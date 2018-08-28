export const _auth = authUser => {
  if (!authUser) {
    throw new Error('Plese Login Again!')
  }
}
