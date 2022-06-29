const { userAdapters } = require('../../adapters');

module.exports = {
  Mutation: {
    createUser: async (_, { input }, { services, ErrorWithProps }) => {
      try {
        return await userAdapters.createUser(input, services);
      } catch (error) {
        throw new ErrorWithProps(error.message, {
          id: input.id,
          code: 'USER_ALREADY_EXIST',
          timestamp: Math.round(new Date().getTime() / 1000),
        });
      }
    },
  },
};
