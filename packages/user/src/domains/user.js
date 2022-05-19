const getUserId = (userModel) => async (userId) => {
  const res = await userModel.findOne({ where: { userId } });
  return res;
};

const getUserName = (userModel) => async (userName) => {
  const res = await userModel.findOne({ where: { userName } });
  return res;
};

const create = (userModel) => async (user) => {
  const res = await userModel.create({ ...user });
  return res;
};

module.exports = {
  getUserId,
  getUserName,
  create,
};
