const getByEmail = (userModel, redis) => async (email) => {
  const userEmail = `user:email=${email}`;
  const cache = await redis.get(userEmail);
  if (cache) return JSON.parse(cache);
  const data = await userModel.findOne({ where: { email } });
  if (data) {
    await redis.set(userEmail, JSON.stringify(data.get({ plain: true })));
    return data.get({ plain: true });
  }
  return data;
};

module.exports = getByEmail;
