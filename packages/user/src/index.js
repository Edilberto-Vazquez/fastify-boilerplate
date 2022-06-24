// Services
const { getById, getByUserName, createUser } = require('./useCases');

// Domains
const {
  getUserIdQuery,
  getUserNameQuery,
  createMutation,
} = require('./domains');

module.exports = {
  getById: getById(getUserIdQuery),
  getByUserName: getByUserName(getUserNameQuery),
  createUser: createUser(createMutation, getUserNameQuery),
};
