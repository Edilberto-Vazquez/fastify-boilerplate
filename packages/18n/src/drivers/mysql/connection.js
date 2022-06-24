const { drivers } = require('@package/core');
const { sequelize } = drivers;
const setupModels = require('./models');

setupModels(sequelize);

module.exports = sequelize;
