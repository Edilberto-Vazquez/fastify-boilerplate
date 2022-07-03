const updateUser = (update, getById) => async (input) => {
  if (!input.id) throw new Error(`ID ${input.id} not found on user`);
  const prev = await getById(input.id);
  if (!prev) throw new Error(`The user ${input.id} does not exist`);
  const data = await update(input, { where: { id: input.id } });
  return data;
};

module.exports = updateUser;
