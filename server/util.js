export const _auth = authCustomer => {
  if (!authCustomer) {
    throw new Error('Please login first!')
  }
  if (authCustomer.roles) {
    throw new Error('Account not customer!')
  }
}

export const _authAdmin = authAdmin => {
  if (!authAdmin) {
    throw new Error('Please login first!')
  }
  if (authAdmin.roles == undefined) {
    throw new Error('Account not admin!')
  }
}
