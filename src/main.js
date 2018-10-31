import http from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import BootExpress from './boots/BootExpress';
import BootMongo from './boots/BootMongo';
import BootGraphql from './boots/BootGraphql';
import schema from './graphql'

import { PORT } from './config/Server';

const RunApp = async () => {
  try {
    await BootMongo();
    let app = BootExpress();

    app = BootGraphql(app);
    //
    const server = http.createServer(app);

    server.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`) ;
       new SubscriptionServer({
        execute,
        subscribe,
        schema
      }, {
        server: server,
        path: '/subscriptions',
      });
    });
  } catch (error) {
    console.log('[ERROR]', error);
    process.exit(1);
  }
};

RunApp();
