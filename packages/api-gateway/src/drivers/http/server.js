const Fastify = require('fastify');
const PluginLoader = require('fastify-plugin');
const services = require('./plugins/services');
const mercurius = require('mercurius');
const { print } = require('graphql');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const path = require('path');

const fastify = Fastify({ logger: true });

fastify.register(PluginLoader(services.servicesAsPlugin));

const typeDefs = loadFilesSync(path.join(__dirname, 'resolvers'), {
  extensions: ['graphql'],
});

const resolvers = loadFilesSync(path.join(__dirname, 'resolvers'), {
  extensions: ['js'],
});

fastify.register(mercurius, {
  schema: print(mergeTypeDefs(typeDefs)),
  resolvers: mergeResolvers(resolvers),
  graphiql: true,
  services: services.services,
  context: (request, reply) => {
    return {
      services: services.services,
    };
  },
});

async function start() {
  try {
    fastify.listen({ port: 4000 });
    fastify.log.info('🚀 Server ready at http://localhost:4000');
  } catch (error) {
    fastify.log.error(
      `[http-server]: Error with message ${error.message} has happened`
    );
    process.exit(1);
  }
}

module.exports = { start };
