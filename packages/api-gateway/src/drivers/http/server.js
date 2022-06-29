const Fastify = require('fastify');
// if use rest API or need that fastify use a service enable this line
// const PluginLoader = require('fastify-plugin');
const { services } = require('./plugins/services');
const mercurius = require('mercurius');
const { ErrorWithProps } = mercurius;
const { print } = require('graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const path = require('path');

const fastify = Fastify({ logger: true });

// if use rest API or need that fastify use a service enable this line
// fastify.register(PluginLoader(services.loadServicesAsPlugin));

const typeDefs = loadFilesSync(path.join(__dirname, 'resolvers'), { extensions: ['graphql'] });

const resolvers = loadFilesSync(path.join(__dirname, 'resolvers'), { extensions: ['js'] });

fastify.register(mercurius, {
  schema: print(mergeTypeDefs(typeDefs)),
  resolvers: mergeResolvers(resolvers),
  graphiql: true,
  context: (request, reply) => {
    if (request && reply) {
      return {
        request,
        reply,
        pubsub: services.coreServices.drivers.redis.pubsub,
        services: services,
        ErrorWithProps,
      };
    } else return { pubsub: services.coreServices.drivers.redis.pubsub };
  },
});

async function start() {
  try {
    fastify.listen({ port: 4000 });
    fastify.log.info('🚀 Server ready at http://localhost:4000');
  } catch (error) {
    fastify.log.error(`[http-server]: Error with message ${error.message} has happened`);
    process.exit(1);
  }
}

module.exports = { start };
