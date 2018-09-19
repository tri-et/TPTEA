import {Menu} from '../../models'
const resolvers = {
  RootQuery: {
    async listModifies(_, {input}) {
      var menu = new Menu(input)
      return await menu.getModifies()
    },
  },
  RootMutation: {},
}
export default resolvers
