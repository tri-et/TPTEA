import {MainCategory, Category, Menu, Modifier} from '../../models'
const resolvers = {
  RootQuery: {
    async fetchOrderSystemData() {
      let [mainCategories, categories, menus, modifiers] = await Promise.all([
        MainCategory.findAll(),
        Category.findAll(),
        Menu.findAll(),
        Modifier.findAll(),
      ])
      return {
        mainCategories,
        categories,
        menus,
        modifiers,
      }
    },
  },
  RootMutation: {},
}
export default resolvers
