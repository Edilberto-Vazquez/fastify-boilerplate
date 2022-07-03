const remove = (remove, getById) => async (id) => {
  const prev = await getById(id);
  if (!prev) return false;
  const data = await remove({ where: { id } });
  return data;
};

module.exports = remove;
