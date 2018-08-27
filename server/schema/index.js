import {makeExecutableSchema} from 'graphql-tools'

// import userDef from './user/def'
// import userRes from './user/res'
import memberDef from './member/def'
import memberRes from './member/res'

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`

const RootQuery = `
  type RootQuery {
    listUser: String
    listMember:[Member]
    listOrderHistory:[OrderHistory]
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
    memberDef,
  ],
  resolvers: [
    // userRes
    memberRes,
  ],
})
