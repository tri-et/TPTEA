import {Customer} from '../../models'
import GraphQLDate from 'graphql-date'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {_auth} from '../../util'
const SALT = 10
async function generateLoginJwt(input, msg = '') {
  var user = await Customer.findOne({where: {username: input.username}})
  var tokenJwt = jwt.sign(
    {
      id: user.id,
      username: user.username,
      name: user.name,
      add: user.add,
      phone: user.phone,
      balance: user.balance,
      points: user.points,
    },
    process.env.JWT_SECRET,
    {expiresIn: '1y'}
  )
  return msg === '' ? tokenJwt : {token: tokenJwt, msg: msg}
}

const resolvers = {
  Date: GraphQLDate,
  RootQuery: {
    async getCustomer(_, {input}, {authCustomer}) {
      _auth(authCustomer)
      return await Customer.findOne({where: {id: input}})
    },
  },
  RootMutation: {
    async login(_, {input}) {
      const user = await Customer.findOne({where: {username: input.username}})
      if (!user) {
        throw new Error('Account not found!')
      }
      const valid = await bcrypt.compare(input.password, user.password)
      if (!valid) {
        throw new Error('Wrong Password ...')
      }
      return generateLoginJwt(input)
    },
    async register(_, {input}) {
      var user = await Customer.findOne({where: {username: input.username, type: input.type}})
      if (user) {
        throw new Error('Account is existed!')
      }
      input.password = bcrypt.hashSync(input.password, SALT)
      return await Customer.upsert(input).then(async function() {
        return generateLoginJwt(input)
      })
    },
    async loginFb(_, {input}) {
      const user = await Customer.findOne({where: {username: input.username}})
      if (!user) {
        throw new Error('Account not found!')
      }
      return generateLoginJwt(input)
    },
    async registerFb(_, {input}) {
      var user = await Customer.findOne({where: {username: input.username, type: input.type}})
      var msgRes = ''
      if (user) {
        msgRes = 'Account is existed!'
        input.id = user.id
      } else {
        msgRes = 'Regitered Successfully!'
      }
      return await Customer.upsert(input).then(async function() {
        return generateLoginJwt(input, msgRes)
      })
    },
  },
}

export default resolvers
