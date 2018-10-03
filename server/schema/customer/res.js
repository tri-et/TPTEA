import {Customer} from '../../models'
import GraphQLDate from 'graphql-date'
import bcrypt from 'bcrypt'
import {_auth} from '../../util'
import {generateLoginJwt} from './mutations'
const SALT = 10

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
      return generateLoginJwt(Customer, input)
    },
    async register(_, {input}) {
      var user = await Customer.findOne({where: {username: input.username, type: input.type}})
      if (user) {
        throw new Error('Account is existed!')
      }
      input.password = bcrypt.hashSync(input.password, SALT)
      return await Customer.upsert(input).then(async function() {
        return generateLoginJwt(Customer, input)
      })
    },
    async loginFb(_, {input}) {
      const user = await Customer.findOne({where: {username: input.username}})
      if (!user) {
        throw new Error('Account not found!')
      }
      return generateLoginJwt(Customer, input)
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
        return generateLoginJwt(Customer, input, msgRes)
      })
    },
  },
}

export default resolvers
