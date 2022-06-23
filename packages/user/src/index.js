// Services
const { getById, getByUserName, createUser } = require('./useCases');

// Domains
const {
  getUserIdQuery,
  getUserNameQuery,
  createMutation,
} = require('./domains');

// Entities
const {
  UserModel,
  PaymentMethodModel,
  UserSearchModel,
} = require('./drivers/mysql/models');

module.exports = {
  getById: getById(getUserIdQuery),
  getByUserName: getByUserName(getUserNameQuery),
  createUser: createUser(createMutation, getUserNameQuery),
  entities: {
    UserModel,
    PaymentMethodModel,
    UserSearchModel,
  },
};
