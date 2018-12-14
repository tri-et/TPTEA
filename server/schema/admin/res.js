import {Admin, PushSubscription} from '../../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {_authAdmin, verifyCustomerPaymentId} from '../../util'
import webPush from 'web-push'
let endPointUrlExpired = []
const pushMsg = ({endpoint, p256dh, auth, id}, dataToSend) => {
  let options = {
    gcmAPIKey: process.env.FCM_API_KEY,
    TTL: 60,
  }
  let pushSubscription = {
    endpoint,
    keys: {
      p256dh,
      auth,
    },
  }
  return webPush.sendNotification(pushSubscription, dataToSend, options).catch(({statusCode}) => {
    if (statusCode === 410) {
      endPointUrlExpired.push(id)
    }
  })
}
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
      let {amount, jwtPayment} = input
      let user = await verifyCustomerPaymentId(jwtPayment)
      let balance = user.get('balance')
      if (balance < amount) throw new Error('Customer`s Balance is not enough!')
      else {
        return await user.update({balance: balance - amount}).then(({balance, username}) => {
          return {balance, username, chargedAmount: amount}
        })
      }
    },
    async pushMessage(_, {input}, {loggedInUser}) {
      _authAdmin(loggedInUser)
      let data = await PushSubscription.findAll()
      let pushComlepted = Promise.resolve()
      data.forEach(subscription => {
        pushComlepted = pushComlepted.then(() => {
          return pushMsg(subscription, input)
        })
      })
      let {statusCode} = await pushComlepted
      if (statusCode !== 201) throw new Error('Can`t push message to all clients')
      else
        return await PushSubscription.destroy({
          where: {
            id: {
              $in: endPointUrlExpired,
            },
          },
        }).then(() => {
          endPointUrlExpired = []
          return 'Success'
        })
    },
  },
}
export default resolvers
