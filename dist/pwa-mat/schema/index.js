'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphqlTools = require('graphql-tools');

// import userDef from './user/def'
// import userRes from './user/res'

var SchemaDefinition = '\n  schema {\n    query: RootQuery,\n    mutation: RootMutation\n  }\n';

var RootQuery = '\n  type RootQuery {\n    listUser: String\n  }\n';

var RootMutation = '\n  type RootMutation {\n    login(input:String): String\n  }\n';

exports.default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation],
  resolvers: [
    // userRes
  ]
});