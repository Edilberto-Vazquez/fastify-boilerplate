const { Sequelize } = require('sequelize');
const config = require('../../../config/db/config');
const setupModels = require('../../../config/db/models');

const sequelize = new Sequelize(config.development);
setupModels(sequelize);

module.exports = sequelize.model('User');
