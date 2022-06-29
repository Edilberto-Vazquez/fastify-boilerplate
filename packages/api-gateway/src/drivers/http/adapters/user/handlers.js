async function createUser(input, services) {
  const res = await services.userServices.create(input);
  return res;
}

module.exports = {
  createUser,
};
