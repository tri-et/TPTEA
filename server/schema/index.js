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
    listUser: String
  }
`

const RootMutation = `
  type RootMutation {
    login(input:String): String
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
