const getUserById = require('./getUserById');
const getUserByEmail = require('./getUserByEmail');
const createUser = require('./createUser');
const updateUser = require('./update');
const removeUser = require('./removeUser');
const countUsers = require('./countUsers');
const listUsers = require('./list');

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  removeUser,
  countUsers,
  listUsers,
};
