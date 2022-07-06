const getByName = (clientOS, redis) => async (name) => {
  const user = `clientOS:name=${name}`;
  const cache = await redis.get(user);
  if (cache) return JSON.parse(cache);
  let data = await clientOS.findOne({ where: { name } });
  if (data) {
    data = data.get({ plain: true });
    await redis.set(user, JSON.stringify(data));
  }
  return data;
};

const singleton = (clientOS, redis) => async (name) => {
  let data = await this.getByName(name);
  if (data) return data;
  await clientOS.create({ name });
  await redis.del(`clientOS:name=${name}`);
  data = await this.getByName(name);
  return data;
};

const count = (clientOS, redis) => async () => {
  const u = `clientOS:count`;
  const cache = await redis.get(u);
  if (cache) return JSON.parse(cache);
  const data = await clientOS.count();
  await redis.set(u, JSON.stringify(data));
  return data;
};

const list = (clientOS, redis) => async () => {
  const user = `clientOS`;
  const cache = await redis.get(user);
  if (cache) return JSON.parse(cache);
  const order = [['id', 'ASC']];
  let data = await clientOS.findAll({ order });
  data = data.map((x) => x.get({ plain: true }));
  await redis.set(user, JSON.stringify(data));
  return data;
};

module.exports = {
  getByName,
  singleton,
  count,
  list,
};
