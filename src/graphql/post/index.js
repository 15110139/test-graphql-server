import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './Post.graphql';

import PostMutation from './resolvers/PostMutation';
import PostQueries from './resolvers/PostQuery';

export default makeExecutableSchema({
  typeDefs,
  resolvers: [PostMutation, PostQueries],
});
