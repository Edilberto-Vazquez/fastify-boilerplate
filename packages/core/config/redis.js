const prefix = require('./environment');

const redisConfig = {
  user: process.env[`${prefix}REDIS_USER`],
  password: process.env[`${prefix}REDIS_PASSWORD`],
  host: process.env[`${prefix}REDIS_HOST`],
  port: process.env[`${prefix}REDIS_PORT`],
  db: process.env[`${prefix}REDIS_DB`],
  url: process.env[`${prefix}REDIS_URL`],
  maxRetriesPerRequest: process.env[`${prefix}REDIS_MAX_RETRIES_PER_REQUEST`],
  keyPrefix: process.env[`${prefix}REDIS_KEY_PREFIX`],
};

module.exports = redisConfig;
