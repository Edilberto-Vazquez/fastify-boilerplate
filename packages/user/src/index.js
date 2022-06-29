// Services
const { getUserById, getUserByEmail, createUser } = require('./useCases');

// Domains
const { getById, getByEmail, create, update, remove, count, list } = require('./domains');

module.exports = {
  getById: getUserById(getById),
  getByEmail: getUserByEmail(getByEmail),
  create: createUser(create, getUserById(getById), getUserByEmail(getByEmail)),
};
