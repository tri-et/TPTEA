const Admin = `
  type Admin {
    id: Int
    username: String
    password: String
    roles:String
  }
  input AdminLoginInput {
    username: String!
    password: String!
  }
`
export default Admin
