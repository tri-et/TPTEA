import {MainCategory, Category} from '../../models'
const resolvers = {
  RootQuery: {
    async listCategories(_, {input}) {
      let mainCategory = new MainCategory({id: input})
      return await mainCategory.getCategories()
    },
    async fetchAllCategoriesAdmin() {
      return await Category.findAll()
    },
  },
  RootMutation: {},
  Category: {
    async nameMainCategory({mainCategoryId}) {
      return await MainCategory.findOne({where: {id: mainCategoryId}}).get('name')
    },
  },
}
export default resolvers
