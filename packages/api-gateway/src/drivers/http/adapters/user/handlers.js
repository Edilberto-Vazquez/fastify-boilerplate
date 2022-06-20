async function createUser(input, services) {
  const res = await services.userServices.createUser(input);
  return res;
}

module.exports = {
  createUser,
};
