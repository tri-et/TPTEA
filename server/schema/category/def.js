const Category = `
  type Category {
    id: Int
    name: String
    desc: String
    img: String
    mainCategoryName: String
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
