const PluginLoader = require('fastify-plugin');

const UserServices = require('@boilerplate/user');

async function services(fastify) {
  await fastify.decorate('userServices', UserServices);
}

module.exports = PluginLoader(services);
