import {Stores} from '../../models'
const resolvers = {
  RootQuery: {
    async fetchAllStores() {
      return await Stores.findAll()
    },
  },
  RootMutation: {},
}
export default resolvers
