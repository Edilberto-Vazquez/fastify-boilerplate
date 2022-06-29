const getUserByEmail = (getByEmail) => async (email) => {
  let user = await getByEmail(email);
  return user;
};

module.exports = getUserByEmail;
