// Domains
const { getUserId, getUserName, create } = require('./user');

// Drivers
const userModel = require('../drivers/postgresql/connections');

module.exports = {
  getUserIdQuery: getUserId(userModel),
  getUserNameQuery: getUserName(userModel),
  createMutation: create(userModel),
};
