const getById = (userModel, redis) => async (id) => {
  const user = `user:id=${id}`;
  const cache = await redis.get(user);
  if (cache) return JSON.parse(cache);
  let data = await userModel.findOne({ where: { id } });
  if (data) {
    data = data.get({ plain: true });
    await redis.set(user, JSON.stringify(data));
    return data;
  }
  return data;
};

module.exports = getById;
