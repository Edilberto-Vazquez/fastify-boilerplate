const getUserById = (getById) => async (id) => {
  const user = await getById(id);
  return user;
};

module.exports = getUserById;
