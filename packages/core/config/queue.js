const prefix = require('./environment');

const queueConfig = {
  user: process.env[`${prefix}QUEUE_USER`],
  password: process.env[`${prefix}QUEUE_PASSWORD`],
  host: process.env[`${prefix}QUEUE_HOST`],
  port: process.env[`${prefix}QUEUE_PORT`],
  db: process.env[`${prefix}QUEUE_DB`],
  url: process.env[`${prefix}QUEUE_URL`],
  maxRetriesPerRequest: process.env[`${prefix}QUEUE_MAX_RETRIES_PER_REQUEST`],
  keyPrefix: process.env[`${prefix}QUEUE_KEY_PREFIX`],
};

module.exports = queueConfig;
