const { findOneUser, insertUser } = require("../controllers/db.controller");
const { User } = require("../models/models.schema");

const getAllUsers = async (server) => {
  server.route({
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      try {
        const user = await findOneUser({ firstName: "John" });
        return await h.response(user).code(200);
      } catch (error) {
        return h.response(error);
      }
    },
  });
};

const createUser = async (server) => {
  server.route({
    method: "POST",
    path: "/post",
    handler: async (request, h) => {
      try {
        const { firstName, lastName, userName, id } = request.payload;
        const user = new User(firstName, lastName, userName, id);
        await insertUser(user);
        return h.response(200);
      } catch (error) {
        return h.response(error);
      }
    },
  });
};

module.exports = {
  getAllUsers,
  createUser,
};
