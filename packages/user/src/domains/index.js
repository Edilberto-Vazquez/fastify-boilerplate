// Drivers
const { drivers } = require('@package/core');
const { redis } = drivers;
const sequelize = require('../drivers/mysql/connection');

// Domains
const getUserById = require('./getById');
const getUserByEmail = require('./getByEmail');
const createUser = require('./create');
const updateUser = require('./update');
const removeUser = require('./delete');
const countUsers = require('./count');
const listUsers = require('./list');

// Utils
const processFilter = require('../utils/processFilter');

// define the target model
const userModel = sequelize.model('User');
// this function is required for createUser and updateUser
const getById = getUserById(userModel, redis.redis);

module.exports = {
  getById: getUserById(userModel, redis.redis),
  getByEmail: getUserByEmail(userModel, redis.redis),
  create: createUser(userModel, redis.redis, redis.destroyCache, redis.pubsub, getById),
  update: updateUser(userModel, redis.destroyCache, redis.pubsub, getById),
  remove: removeUser(userModel, redis.redis, redis.destroyCache),
  count: countUsers(userModel, redis.redis, processFilter),
  list: listUsers(userModel, redis.redis, processFilter),
};
