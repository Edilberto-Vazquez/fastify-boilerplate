const update = (userModel, destroyCache, pubsub, getById) => async (input) => {
  await userModel.update(input, { where: { id: input.id } });
  await destroyCache(`user:id=${input.id}*`);
  if (input.email) await destroyCache(`user:email=${input.email}*`);
  await destroyCache(`users*`);
  const data = await getById(input.id);
  await pubsub.publish(`updatedUser`, { updatedUser: data });
  await pubsub.publish(`updatedUser:id=${input.id}`, { updatedUser: data });
  // if (data.stripeId)
  //   if (input.firstName || input.lastName || input.email || input.phone)
  //     await stripe.customers.update(data.stripeId, {
  //       name: `${data.firstName} ${data.lastName}`,
  //       email: data.email,
  //       phone: data.phone,
  //     });
  return data;
};

module.exports = update;
