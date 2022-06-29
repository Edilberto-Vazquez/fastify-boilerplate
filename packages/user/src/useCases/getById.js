const getUserById = (getById) => async (id) => {
  let user = await getById(id);
  return user;
};

module.exports = getUserById;
