const { CreateOrValidate } = require("../middleware/CreateOrValidateUser");
const { findUser } = require("../middleware/findUser");

const getAllUsers = async (server) => {
  server.route({
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      return findUser(request, h);
    },
  });
};

const createUser = async (server) => {
  server.route({
    method: "POST",
    path: "/post",
    handler: async (request, h) => {
      return CreateOrValidate(request, h);
    },
  });
};

module.exports = {
  getAllUsers,
  createUser,
};
