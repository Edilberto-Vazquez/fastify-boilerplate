// Services
const { getUserById, getUserByEmail, createUser, updateUser, deleteUser, countUsers, listUsers } = require('./useCases');

// Domains
const { getById, getByEmail, create, update, remove, count, list } = require('./domains');

module.exports = {
  getById: getUserById(getById),
  getByEmail: getUserByEmail(getByEmail),
  create: createUser(create, getUserById(getById), getUserByEmail(getByEmail)),
  update: updateUser(update, getUserById(getById)),
  remove: deleteUser(remove, getUserById(getById)),
  count: countUsers(count),
  list: listUsers(list),
};
