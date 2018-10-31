import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import schema from '../graphql';
import { KEY_AUTH } from '../config/Server';
// import AuthHelper from '../helpers/AuthHelper';

const bootGraphql = (app) => {
  app.use(
    '/graphql',
    graphqlExpress((req) => {
      // https://github.com/graphql/express-graphql/blob/3fa6e68582d6d933d37fa9e841da5d2aa39261cd/src/index.js#L257
      const query = req.query.query || req.body.query;
      if (query && query.length > 2000) throw new Error('Query too large.');
      return {
        schema,
        context: {
          accessToken: req.headers[KEY_AUTH] || req.cookies[KEY_AUTH] || null,
        },
      };
    }),
  );

  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
      subscriptionsEndpoint: 'ws://localhost:3001/subscriptions'
    }),
  );

  return app;
};

export default bootGraphql;
