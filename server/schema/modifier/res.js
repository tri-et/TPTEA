import {Menu} from '../../models'
import dash from 'lodash'
const resolvers = {
  RootQuery: {
    async fetchModifiers(_, {input}) {
      var menu = new Menu(input)
      let dataModifiers = await menu.getModifiers()
      return dash
        .chain(dataModifiers)
        .groupBy('groupTitle')
        .map((data, groupTitle) => ({
          data,
          groupTitle,
          groupType: data[0].groupType,
        }))
        .value()
    },
  },
  RootMutation: {},
}
export default resolvers
