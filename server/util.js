export const _auth = authCustomer => {
  if (!authCustomer) {
    throw new Error('Please login first!')
  }
  if (authCustomer.roles) {
    throw new Error('This is not a Valid Customer account!')
  }
}

export const _authAdmin = authAdmin => {
  if (!authAdmin) {
    throw new Error('Please login as an Admin first!')
  }
  if (authAdmin.roles == undefined) {
    throw new Error('This Account is not an Admin!')
  }
}
