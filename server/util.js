import uuidv4 from 'uuid/v4'
import jwt from 'jsonwebtoken'
import _ from 'lodash'
export const _auth = loggedInUser => {
  if (!loggedInUser) {
    throw new Error('Please login first!')
  }
  if (loggedInUser.roles) {
    throw new Error('This is not a Valid Customer account!')
  }
}

export const _authAdmin = loggedInUser => {
  if (!loggedInUser) {
    throw new Error('Please login as an Admin first!')
  }
  if (loggedInUser.roles == undefined) {
    throw new Error('This Account is not an Admin!')
  }
}

export const genGiftCardQR = (amount, expiry) => {
  var isNumber = _.every([amount, expiry], item => {
    return typeof item === 'number'
  })
  if (!isNumber) {
    throw new Error('Amount and Expiry must be number!')
  }
  return jwt.sign(
    {
      unique: uuidv4(),
      createdDate: new Date(),
      amount,
      expiry,
    },
    process.env.JWT_SECRET
  )
}
