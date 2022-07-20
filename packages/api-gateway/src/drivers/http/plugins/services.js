const UserServices = require('@package/user');
const CoreServices = require('@package/core');

async function services(fastify) {
  await fastify.decorate('userServices', UserServices);
  await fastify.decorate('coreServices', CoreServices);
}

module.exports = {
  loadServicesAsPlugin: services,
  services: {
    user: UserServices,
    core: CoreServices,
  },
};
