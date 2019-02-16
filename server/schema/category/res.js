import {MainCategory, Category} from '../../models'
import {saveImage, _authAdmin} from '../../util'
const resolvers = {
  RootQuery: {
    async listCategories(_, {input}) {
      let mainCategory = new MainCategory({id: input})
      return await mainCategory.getCategories()
    },
    async fetchAllCategoriesAdmin(_, __, {loggedInUser}) {
      _authAdmin(loggedInUser)
      return await Category.findAll()
    },
  },
  RootMutation: {
    async createCategory(_, {input}, {loggedInUser}) {
      _authAdmin(loggedInUser)
      let img = input.img === '' ? '' : await saveImage(input.img)
      return await Category.create({...input, img}).then(catefgory => catefgory)
    },
    async updateCategory(_, {input}, {loggedInUser}) {
      _authAdmin(loggedInUser)
      if (input.img.indexOf('base64') > 0) {
        let img = await saveImage(input.img)
        input.img = img
      }
      return await Category.update(input, {
        where: {
          id: input.id,
        },
      }).then(() => {
        return input
      })
    },
    async deleteCategories(_, {input}, {loggedInUser}) {
      _authAdmin(loggedInUser)
      return await Category.destroy({
        where: {
          id: {
            $in: input,
          },
        },
      })
    },
  },
  Category: {
    async mainCategoryName({mainCategoryId}) {
      return await MainCategory.findOne({where: {id: mainCategoryId}}).get('name')
    },
  },
}
export default resolvers
