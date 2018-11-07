import {Admin} from '../../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {_authAdmin, verifyCustomerPaymentId} from '../../util'
const resolvers = {
  RootQuery: {
    async fetchAdmin(_, __, {loggedInUser}) {
      _authAdmin(loggedInUser)
      return await Admin.findById(loggedInUser.id)
    },
  },
  RootMutation: {
    async loginAdmin(_, {input}) {
      const admin = await Admin.findOne({where: {username: input.username}})
      if (!admin) {
        throw new Error('Admin account not found. Please try again!')
      }
      const valid = await bcrypt.compare(input.password, admin.password)
      if (!valid) {
        throw new Error('Wrong Admin Password ...')
      }
      return (
        jwt.sign(
          {
            id: admin.id,
            username: admin.username,
            roles: admin.roles,
          },
          process.env.JWT_SECRET,
          {expiresIn: '1y'}
        ) + 'a'
      )
    },
    async receivePayment(_, {input}, {loggedInUser}) {
      _authAdmin(loggedInUser)
      let user = await verifyCustomerPaymentId(input.jwtPayment)
      let balance = user.get('balance')
      if (balance < input.amount) throw new Error('Balance not enough!')
      else {
        return await user.update({balance: balance - input.amount}).then(({balance, username}) => {
          return {balance, username, chargedAmount: input.amount}
        })
      }
    },
  },
}
export default resolvers
