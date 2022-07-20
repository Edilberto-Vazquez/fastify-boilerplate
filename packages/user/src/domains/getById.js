const getById = (userModel, redis) => async (id) => {
  const userId = `user:id=${id}`;
  const cache = await redis.get(userId);
  if (cache) return JSON.parse(cache);
  const data = await userModel.findOne({ where: { id } });
  if (data) {
    await redis.set(userId, JSON.stringify(data.get({ plain: true })));
    return data.get({ plain: true });
  }
  return data;
};

module.exports = getById;
