const UserServices = require('@package/user');

async function services(fastify) {
  await fastify.decorate('userServices', UserServices);
}

module.exports = {
  servicesAsPlugin: services,
  services: {
    userServices: UserServices,
  },
};
