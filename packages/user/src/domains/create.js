const create = (userModel, destroyCache, pubsub) => async (input) => {
  const user = await userModel.create({ ...input });
  if (user) {
    await destroyCache(`user:id=${input.id}*`);
    if (input.email) await destroyCache(`user:email=${input.email}*`);
    await destroyCache(`users*`);
    await pubsub.publish(`createdUser`, {
      createdUser: user.toJSON(),
    });
  }
  return user.get({ plain: true });
};

module.exports = create;
