const list = (list) => async (filter, options) => {
  if (!filter) filter = {};
  if (!options) options = {};
  const data = list(filter, options);
  return data;
};

module.exports = list;
