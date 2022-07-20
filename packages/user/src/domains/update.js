const update = (userModel, destroyCache, pubsub, getById) => async (input) => {
  const update = await userModel.update(input, { where: { id: input.id } });
  const userUpdated = update[1].find((user) => user.id === input.id);
  if (userUpdated) {
    if (input.email) await destroyCache(`user:email=${input.email}*`);
    await destroyCache(`users*`);
    await pubsub.publish(`updatedUser`, {
      updatedUser: userUpdated.get({ plain: true }),
    });
    await pubsub.publish(`updatedUser:id=${input.id}`, {
      updatedUser: userUpdated.get({ plain: true }),
    });
    // if (data.stripeId)
    //   if (input.firstName || input.lastName || input.email || input.phone)
    //     await stripe.customers.update(data.stripeId, {
    //       name: `${data.firstName} ${data.lastName}`,
    //       email: data.email,
    //       phone: data.phone,
    //     });
    return userUpdated.get({ plain: true });
  }
  return userUpdated;
};

module.exports = update;
