// configs
const mysqlConf = require('../config/mysql');
const redisConf = require('../config/redis');
const queueConf = require('../config/queue');

// drivers
const redis = require('./drivers/redis/connection');
const sequelize = require('./drivers/mysql/connection');

// utils
const environment = require('./utils/environment');
const loadSeed = require('./utils/loadSeed');

module.exports = {
  configs: {
    mysqlConf,
    redisConf,
    queueConf,
  },
  drivers: {
    redis,
    sequelize,
  },
  utils: {
    environment,
    loadSeed,
  },
};
