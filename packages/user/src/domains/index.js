// Drivers
const { drivers } = require('@package/core');
const { sequelize } = drivers;

// Domains
const { getUserId, getUserName, create } = require('./user');

module.exports = {
  getUserIdQuery: getUserId(sequelize.model('User')),
  getUserNameQuery: getUserName(sequelize.model('User')),
  createMutation: create(sequelize.model('User')),
};
