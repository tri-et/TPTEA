import {Customer} from '../../models'
const resolvers = {
  RootQuery: {
    async fetchCustomerOrders(_, __, {loggedInUser}) {
      let customer = new Customer({id: 2})
      return await customer.getOrders()
    },
  },
  RootMutation: {},
  CustomerOrder: {
    async storeAddress(customerorder, _, __) {
      return await customerorder.getStore().get('address')
    },
  },
}
export default resolvers
