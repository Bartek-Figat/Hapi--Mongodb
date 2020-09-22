const { findOneUser } = require("../controllers/db.controller");

const findUser = async (request, h) => {
  try {
    const query = { firstName: "John" };
    const user = await findOneUser(query);

    if (!user) return await h.response(query).code(201);
    await h.response(user).code(200);
  } catch (error) {
    return h.response(error);
  }
};

module.exports = {
  findUser,
};
