const cryptoRandomString = require('crypto-random-string');

const createUser = (create, getById, getByEmail) => async (input) => {
  if (!input.id) input.id = cryptoRandomString({ type: 'url-safe', length: 10 });
  if (input.country) input.countryId = input.country;
  if (input.phoneCountry) input.phoneCountryId = input.phoneCountry;
  const prevId = await getById(input.id);
  if (prevId)
    throw new Error(`The user ${input.id} alredy exist, please use another`);
  const prevEmail = await getByEmail(input.email);
  if (prevEmail) throw new Error(`The email ${input.email} is already registered.`);
  const data = await create(input);
  if (!data) throw new Error('Failed to create user');
  return data;
};

module.exports = createUser;
