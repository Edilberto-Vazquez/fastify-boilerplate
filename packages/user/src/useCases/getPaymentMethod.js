const getUserPaymentMethod = (getById, getPaymentMethod) => async (userId) => {
  const user = await getById(userId);
  if (!user) return null;
  if (!user.stripeId) return null;
  const customer = getPaymentMethod(user.stripeId);
  if (!customer) return null;
  return customer;
};

module.exports = getPaymentMethod;
