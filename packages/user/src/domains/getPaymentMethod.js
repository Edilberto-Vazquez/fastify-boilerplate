const getPaymentMethod = (getById) => async (userId) => {
  const user = await getById(userId);
  if (!user) return null;
  if (!user.stripeId) return null;
  const customer = await stripe.customers.retrieve(prev.stripeId, {
    expand: ['default_source'],
  });
  if (!customer) return null;
  return customer.default_source;
};

module.exports = getPaymentMethod;
