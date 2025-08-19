// if you haven’t yet, switch to the non-deprecated package:
import { createServer } from 'node:http';
import { createYoga, createPubSub, createSchema } from 'graphql-yoga'; // <- use 'graphql-yoga'
import { typeDefs } from './schema.js';
import resolvers from './resolvers/index.js';

function getViewer() {
  return { id: 'u1', name: 'Alice', email: 'alice@example.com', role: 'EMPLOYEE', team: 'Eng' };
}

const pubsub = createPubSub();
const schema = createSchema({ typeDefs, resolvers });

// 👇 set the GraphQL endpoint to root
const yoga = createYoga({
  schema,
  graphqlEndpoint: '/',                // <- this puts GraphQL + GraphiQL at "/"
  graphiql: { subscriptionsProtocol: 'WS' }
});

const server = createServer(yoga);
server.listen(4000, () => console.log('🚀 GraphQL ready at http://localhost:4000'));
