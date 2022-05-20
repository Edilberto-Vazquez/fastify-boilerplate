const getById = (findOne) => async (userId) => {
  let data = await findOne({ where: { id: userId } });
  return data;
};

const getByUserName = (findOne) => async (userName) => {
  let data = await findOne(userName);
  return data;
};

const createUser = (create, findOne) => async (user) => {
  let res;
  const userExist = await findOne(user.userName);
  if (userExist)
    throw new Error(`This user name alredy exist please use another`);
  res = await create({ ...user });
  return res;
};

module.exports = {
  getByUserName,
  getById,
  createUser,
};
