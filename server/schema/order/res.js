import {MenuCategory} from '../../models'
const resolvers = {
  RootQuery: {
    async listMenuCategory() {
      return await MenuCategory.findAll()
    },
  },
  RootMutation: {},
}
export default resolvers
