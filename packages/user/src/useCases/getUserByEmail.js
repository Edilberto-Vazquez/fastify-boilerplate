const getUserByEmail = (getByEmail) => async (email) => {
  const user = await getByEmail(email);
  return user;
};

module.exports = getUserByEmail;
