const listUsers = (list) => async (filter, options) => {
  let filterToUse = {};
  let optionsToUse = {};
  if (filter) filterToUse = filter;
  if (options) optionsToUse = options;
  const data = list(filterToUse, optionsToUse);
  return data;
};

module.exports = listUsers;
