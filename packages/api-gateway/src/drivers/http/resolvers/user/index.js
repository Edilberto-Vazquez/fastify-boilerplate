const { userAdapters } = require('../../adapters');

module.exports = {
  Mutation: {
    createUser: async (_, { input }, { agentId, services, ErrorWithProps }) => {
      try {
        return await services.user.create(input, services);
      } catch (error) {
        throw new ErrorWithProps(error.message, {
          id: input.id,
          code: 'FAILED_TO_CREATE_USER',
          timestamp: Math.round(new Date().getTime() / 1000),
        });
      }
    },
    updateUser: async (parent, { input }, { agentId, services, ErrorWithProps }) => {
      try {
        // const _session = await services.session.requireSession(agentId);
        // id: _session.userId,
        return await services.user.update(input);
      } catch (error) {
        throw new ErrorWithProps(error.message, {
          id: input.id,
          code: 'FAILED_TO_UPDATE_USER',
          timestamp: Math.round(new Date().getTime() / 1000),
        });
      }
    },
    deleteUser: async (parent, { id }, { agentId, services, ErrorWithProps }) => {
      try {
        return await services.user.delete(id);
      } catch (error) {
        throw new ErrorWithProps(error.message, {
          id: id,
          code: 'FAILED_TO_DELETE_USER',
          timestamp: Math.round(new Date().getTime() / 1000),
        });
      }
    },
  },
};
