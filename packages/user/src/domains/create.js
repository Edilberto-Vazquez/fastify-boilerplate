const create = (userModel, redis, destroyCache, pubsub, getById) => async (input) => {
  await userModel.create({ ...input });
  await destroyCache(`user:id=${input.id}*`);
  if (input.email) await destroyCache(`user:email=${input.email}*`);
  await destroyCache(`users*`);
  const data = await getById(input.id);
  await pubsub.publish(`createdUser`, { createdUser: data });
  return data;
};

module.exports = create;
