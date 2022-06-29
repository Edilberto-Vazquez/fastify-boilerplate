const update = (userModel, destroyCache, pubsub, getById) => async (input) => {
  await userModel.update(input, { where: { id: input.id } });
  await destroyCache(`user:id=${input.id}*`);
  if (input.email) await destroyCache(`user:email=${input.email}*`);
  await destroyCache(`users*`);
  const data = await getById(userModel, redis);
  await pubsub.publish(`updatedUser`, { updatedUser: data });
  await pubsub.publish(`updatedUser:id=${input.id}`, { updatedUser: data });
  return data;
};

module.exports = update;
