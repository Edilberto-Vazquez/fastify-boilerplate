const processFilter = (filter) => {
  let where = {};
  for (let x in filter)
    switch (x) {
      case 'query':
        where = {
          ...where,
          [Op.and]: filter.query
            .trim()
            .split(' ')
            .map((query) => ({
              [Op.or]: [
                {
                  firstName: {
                    [Op.like]: `%${query}%`,
                  },
                },
                {
                  lastName: {
                    [Op.like]: `%${query}%`,
                  },
                },
                {
                  email: {
                    [Op.like]: `${query}%`,
                  },
                },
              ],
            })),
        };
        break;
      case 'id':
        if (filter.id)
          if (filter.id.length > 0)
            where.id = {
              [Op.in]: filter.id,
            };
        break;
    }
  return where;
};

module.exports = processFilter;
