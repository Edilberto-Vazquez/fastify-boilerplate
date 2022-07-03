const getUserById = require('./getById');
const getUserByEmail = require('./getByEmail');
const createUser = require('./create');
const updateUser = require('./update');
const deleteUser = require('./delete');
const countUsers = require('./count');
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
