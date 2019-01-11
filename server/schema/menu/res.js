import {Category, Menu} from '../../models'
const resolvers = {
  RootQuery: {
    async listMenus(_, {input}) {
      var cat = new Category(input)
      return await cat.getMenus()
    },
    async fetchAllMenus() {
      return await Menu.findAll()
    },
  },
  RootMutation: {},
}
export default resolvers
