const { Sequelize } = require('sequelize');
const config = require('../../../config/mysql');
const setupModels = require('./models');

const sequelize = new Sequelize(config.development);
setupModels(sequelize);

module.exports = sequelize;
