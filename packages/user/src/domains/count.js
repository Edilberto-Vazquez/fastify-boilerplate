const count = (userModel, redis, processFilter) => async (filter) => {
  const user = `users:count:filter=${JSON.stringify(filter)}`;
  const cache = await redis.get(user);
  if (cache) return JSON.parse(cache);
  const data = await userModel.count({ where: processFilter(filter) });
  await redis.set(user, JSON.stringify(data));
  return data;
};

module.exports = count;
