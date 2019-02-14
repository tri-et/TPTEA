const Category = `
  type Category {
    id: Int
    name: String
    desc: String
    img: String
    nameMainCategory: String
    mainCategoryId: Int
  }
  input CategoryInput {
    id: Int
    name: String
    desc: String
    img: String
    mainCategoryId: Int
  }
`
export default Category
