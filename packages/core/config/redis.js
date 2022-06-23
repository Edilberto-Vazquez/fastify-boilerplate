const environment = require('../src/utils/environment');

const redisConfig = {
  user: process.env[`${environment}REDIS_USER`],
  password: process.env[`${environment}REDIS_PASSWORD`],
  host: process.env[`${environment}REDIS_HOST`],
  port: process.env[`${environment}REDIS_PORT`],
  db: process.env[`${environment}REDIS_DB`],
  url: process.env[`${environment}REDIS_URL`],
  maxRetriesPerRequest: process.env[`${environment}REDIS_MAX_RETRIES_PER_REQUEST`],
  keyPrefix: process.env[`${environment}REDIS_KEY_PREFIX`],
};

module.exports = redisConfig;
