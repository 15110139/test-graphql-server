import {
  makeExecutableSchema,
} from 'graphql-tools';
import typeDefs from './Auth.graphql';

import AuthMutation from './resolvers/AuthMutation';
import AuthQuery from './resolvers/AuthQuery'

export default makeExecutableSchema({
  typeDefs,
  resolvers: [AuthQuery,AuthMutation],
});
