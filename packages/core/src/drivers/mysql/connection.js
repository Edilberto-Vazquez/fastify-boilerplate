const { Sequelize } = require('sequelize');
const config = require('../../../config/mysql');

const sequelize = new Sequelize(config.development);

module.exports = sequelize;
