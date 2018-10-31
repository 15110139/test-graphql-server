import {
    POST_ADDED
} from './envent'
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();
const resolves = {
    Subscription: {
        postAdded: {
            subscribe: () => pubsub.asyncIterator([POST_ADDED])
        }
    }
}

export default resolves