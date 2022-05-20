async function createUser(input, fastify) {
  const res = await fastify.userServices.createUser(input);
  return res;
}

module.exports = {
  createUser,
};
