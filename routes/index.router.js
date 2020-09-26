const Stream = require("stream");
const fs = require("fs");
const { CreateOrValidate } = require("../middleware/CreateOrValidateUser");
const { findAllUsers } = require("../controllers/db.controller");

const getAllUsers = async (server) => {
  server.route({
    method: "GET",
    path: "/",
    handler: async (request, h) => {
      try {
        const options = {
          // sort matched documents in descending order by rating
          sort: { age: -1 },
          // Include only the `title` and `imdb` fields in the returned document
          projection: { _id: 0, company: 1, age: 1 },
        };
        const user = await findAllUsers({});

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
};
