const Redis = require('ioredis');
const { RedisPubSub } = require('graphql-redis-subscriptions');
const redisConfig = require('../../../config/redis');
const queueConfig = require('../../../config/queue');

const redis = new Redis(redisConfig);
const queue = new Redis(queueConfig);
const subscriber = new Redis(redisConfig);
const publisher = new Redis(redisConfig);

const red = () => redis;

const destroyCache = async (pattern) => {
  const keys = await redis.keys(`${redisConfig.keyPrefix}${pattern}`);
  const pipeline = redis.pipeline();
  keys.forEach((key) => pipeline.del(key.replace(redisConfig.keyPrefix, '')));
  await pipeline.exec();
};

const pubsub = new RedisPubSub({
  publisher,
  subscriber,
});

module.exports = {
  redis,
  queue,
  subscriber,
  publisher,
  red,
  destroyCache,
  pubsub,
};
