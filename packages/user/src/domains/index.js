// Drivers
const { drivers } = require('@package/core');
const { redis } = drivers;
const sequelize = require('../drivers/mysql/connection');

// Domains
const getById = require('./getById');
const getByEmail = require('./getByEmail');
const getPaymentMethod = require('./getPaymentMethod');
const create = require('./create');
const update = require('./update');
const remove = require('./delete');
const count = require('./count');
const list = require('./list');

// Utils
const processFilter = require('../utils/processFilter');

// define the target model
const userModel = sequelize.model('User');

module.exports = {
  getById: getById(userModel, redis.redis),
  getByEmail: getByEmail(userModel, redis.redis),
  getPaymentMethod: getPaymentMethod('stripe'),
  create: create(userModel, redis.destroyCache, redis.pubsub),
  update: update(userModel, redis.destroyCache, redis.pubsub),
  remove: remove(userModel, redis.redis, redis.destroyCache),
  count: count(userModel, redis.redis, processFilter),
  list: list(userModel, redis.redis, processFilter),
};
