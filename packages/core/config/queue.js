const environment = require('../src/utils/environment');

const queueConfig = {
  user: process.env[`${environment}QUEUE_USER`],
  password: process.env[`${environment}QUEUE_PASSWORD`],
  host: process.env[`${environment}QUEUE_HOST`],
  port: process.env[`${environment}QUEUE_PORT`],
  db: process.env[`${environment}QUEUE_DB`],
  url: process.env[`${environment}QUEUE_URL`],
  maxRetriesPerRequest: process.env[`${environment}QUEUE_MAX_RETRIES_PER_REQUEST`],
  keyPrefix: process.env[`${environment}QUEUE_KEY_PREFIX`],
};

module.exports = queueConfig;
