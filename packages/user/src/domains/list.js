const list = (userModel, redis, processFilter) => async (filter, options) => {
  const users = `users:filter=${JSON.stringify(filter)}:options=${JSON.stringify(options)}`;
  const cache = await redis.get(users);
  if (cache) return JSON.parse(cache);
  const where = processFilter(filter);
  const order = options.ord ? [[options.ord, options.asc ? 'ASC' : 'DESC']] : [['updatedAt', 'DESC']];
  const limit = options.num || baseConfig.defaultNum;
  const offset = (options.pag || 0) * limit;
  const data = await userModel.findAll({ where, limit, offset, order }).map((item) => item.get({ plain: true }));
  await redis.set(users, JSON.stringify(data));
  return data;
};

module.exports = list;
