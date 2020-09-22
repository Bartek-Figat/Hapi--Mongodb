const validate = require("validate.js");
const { insertUser } = require("../controllers/db.controller");
const { User } = require("../models/models.schema");

const CreateOrValidate = async (request, h) => {
  const constraints = {
    firstName: {
      presence: {
        allowEmpty: false,
      },
    },
    lastName: {
      presence: {
        allowEmpty: false,
      },
    },
    userName: {
      presence: {
        allowEmpty: false,
      },
    },
    id: {
      presence: {
        allowEmpty: false,
      },
    },
  };
  const dataValidate = await validate(request.payload, constraints);
  try {
    if (dataValidate) return h.response(dataValidate);
    const { firstName, lastName, userName, id } = request.payload;
    const user = new User(firstName, lastName, userName, id);
    await insertUser(user);
    return h.response(200);
  } catch (error) {
    return h.response(error);
  }
};

module.exports = {
  CreateOrValidate,
};
