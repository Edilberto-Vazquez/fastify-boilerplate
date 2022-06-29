const getByEmail = (userModel, redis) => async (email) => {
  const user = `user:email=${email}`;
  const cache = await redis.get(user);
  if (cache) return JSON.parse(cache);
  let data = await userModel.findOne({ where: { email } });
  if (data) {
    data = data.get({ plain: true });
    await redis.set(u, JSON.stringify(data));
    return data;
  }
  return data;
};

module.exports = getByEmail;
