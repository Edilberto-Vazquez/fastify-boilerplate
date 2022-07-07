const getUserById = require('./getById');
const getUserByEmail = require('./getByEmail');
const createUser = require('./createUser');
const updateUser = require('./update');
const deleteUser = require('./delete');
const countUsers = require('./countUsers');
const listUsers = require('./list');

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  countUsers,
  listUsers,
};
