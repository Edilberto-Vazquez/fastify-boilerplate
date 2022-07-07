const countUsers = (count) => async (filter) => {
  const data = await count(filter);
  return data;
};

module.exports = countUsers;
