const Fastify = require('fastify');
const Autoload = require('fastify-autoload');
const { ApolloServer } = require('apollo-server-fastify');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const fp = require('fastify-plugin');
const userServices = require('@boilerplate/user');

const fastify = Fastify({ logger: true });

fastify.register(Autoload, { dir: path.join(__dirname, 'plugins') });

const typeDefs = loadFilesSync(path.join(__dirname, 'resolvers'), {
  extensions: ['graphql'],
});

const resolvers = loadFilesSync(path.join(__dirname, 'resolvers'), {
  extensions: ['js'],
});

function fastifyAppClosePlugin(app) {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

async function start() {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      csrfPrevention: true,
      plugins: [
        fastifyAppClosePlugin(fastify),
        ApolloServerPluginDrainHttpServer({ httpServer: fastify.server }),
      ],
      context: async () => ({
        fastify: fastify,
      }),
    });
    await server.start();
    fastify.register(server.createHandler());
    await fastify.listen(4000);
    fastify.log.info(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  } catch (error) {
    fastify.log.error(
      `[http-server]: Error with message ${error.message} has happened`
    );
    process.exit(1);
  }
}

module.exports = { start };
