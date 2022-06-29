const remove = (userModel, redis, destroyCache) => async (id) => {
  const prev = await this.getById(id);
  await userModel.destroy({ where: { id } });
  await destroyCache(`user:id=${id}*`);
  await destroyCache(`user:email=${prev.email}*`);
  await destroyCache(`users*`);
  await pubsub.publish(`deletedUser`, { deletedUser: prev });
  await pubsub.publish(`deletedUser:id=${id}`, { deletedUser: prev });
  return true;
};

module.exports = remove;
