const Stream = require("stream");
const fs = require("fs");
const { CreateOrValidate } = require("../middleware/CreateOrValidateUser");
const {
  findAllUsers,
  userPagination,
} = require("../controllers/db.controller");

const getAllUsers = async (server) => {
  server.route({
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      try {
        const options = {
          sort: { company: -1 },
          projection: { _id: 1, company: 1 },
        };

        const user = await findAllUsers({}, options);
        const v = user.map((item) => {
          return item;
        });
        return v;
      } catch (error) {
        console.log(error);
      }
    },
  });
};

const getPagination = async (server) => {
  server.route({
    method: "GET",
    path: "/pagination",
    handler: async (request, h) => {
      try {
        const options = {
          sort: { company: -1 },
          projection: { _id: 1, company: 1 },
        };
        const { skip, limit } = request.query;
        const pagination = {
          limit: parseInt(limit),
          skip: parseInt(skip),
        };

        const user = await userPagination({}, options, pagination);
        const v = user.map((item) => {
          return item;
        });
        return v;
      } catch (error) {
        console.log(error);
      }
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
  getPagination,
};
