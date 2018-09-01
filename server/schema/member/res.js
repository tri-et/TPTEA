import {Customer} from '../../models'
import {_auth} from '../../util'
const resolvers = {
  RootQuery: {
    async listMember(_, __, {authCustomer}) {
      _auth(authCustomer)
      return await Customer.findAll({where: {id: authCustomer.id}})
    },
  },
  RootMutation: {},
}

export default resolvers
