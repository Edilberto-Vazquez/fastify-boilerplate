const cryptoRandomString = require('crypto-random-string');

const createUser = (create, getById, getByEmail) => async (input) => {
  const user = input;
  if (!user.id) user.id = cryptoRandomString({ type: 'url-safe', length: 10 });
  const prev = await getById(user.id);
  if (prev) throw new Error(`The user ${user.id} alredy exist, please use another`);
  const prevEmail = await getByEmail(user.email);
  if (prevEmail) throw new Error(`The email ${user.email} is already registered.`);
  const data = await create(user);
  return data;
};

module.exports = createUser;
