import {makeExecutableSchema} from 'graphql-tools'

// import userDef from './user/def'
// import userRes from './user/res'

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`

const RootQuery = `
  type RootQuery {
    listUser: [User]
  }
`

const RootMutation = `
  type RootMutation {
    login(input:LoginInput): String
    deleteUser(input:[Int]): Int
    createUser(input:UserInput): User
    updateUser(input:UserInput): User
  }
`

export default makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    RootMutation,
    // userDef,
  ],
  resolvers: [
    // userRes
  ],
})
