// Domains
const { getUserId, getUserName, create } = require('./user');

// Drivers
const sequelize = require('../drivers/mysql/connection');

module.exports = {
  getUserIdQuery: getUserId(sequelize.model('User')),
  getUserNameQuery: getUserName(sequelize.model('User')),
  createMutation: create(sequelize.model('User')),
};
