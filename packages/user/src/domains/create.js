const create = (userModel, redis, destroyCache, pubsub, getById) => async (input) => {
  const user = await userModel.create({ ...input });
  await destroyCache(`user:id=${input.id}*`);
  if (input.email) await destroyCache(`user:email=${input.email}*`);
  await destroyCache(`users*`);
  await pubsub.publish(`createdUser`, { createdUser: user });
  return user;
};

module.exports = create;
