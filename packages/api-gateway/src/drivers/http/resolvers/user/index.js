const { userAdapters } = require('../../adapters');

module.exports = {
  Query: {
    userName: async () => {
      return 6;
    },
  },
  Mutation: {
    createUser: async (_, { input }, { fastify }) => {
      let res;
      try {
        res = await userAdapters.createUser(input, fastify);
      } catch (error) {
        throw new Error(error);
      }
      return res;
    },
  },
};
