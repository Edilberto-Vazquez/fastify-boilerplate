// drivers
const redis = require('./drivers/redis/connection');

// utils
const environment = require('./utils/environment');

module.exports = {
  redis,
  environment,
};
