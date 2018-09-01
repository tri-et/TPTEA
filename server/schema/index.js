import {makeExecutableSchema} from 'graphql-tools'

import customerDef from './customer/def'
import customerRes from './customer/res'
import memberDef from './member/def'
import memberRes from './member/res'
import orderDef from './order/def'
import orderRes from './order/res'

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`

const RootQuery = `
  type RootQuery {
    getCustomer(input:Int): Customer
    listUser: String
    listMember:[Member]
    listOrderHistory:[OrderHistory]
    listMenuCategory:[MenuCategory]
  }
`

const RootMutation = `
  type RootMutation {
    login(input:LoginInput): String
  }
`

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, customerDef, memberDef, orderDef],
  resolvers: [customerRes, memberRes, orderRes],
})
