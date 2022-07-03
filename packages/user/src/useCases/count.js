const count = (count) => async (filter) => {
  const data = await count(filter);
  return data;
};

module.exports = count;
