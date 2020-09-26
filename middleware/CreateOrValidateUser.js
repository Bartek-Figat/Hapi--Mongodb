const validate = require("validate.js");
const { insertUser } = require("../controllers/db.controller");
const { User } = require("../models/models.schema");

const CreateOrValidate = async (request, h) => {
  const constraints = {
    isActive: {
      presence: {
        allowEmpty: false,
      },
    },
    age: {
      presence: {
        allowEmpty: false,
      },
    },
    eyeColor: {
      presence: {
        allowEmpty: false,
      },
    },
    company: {
      presence: {
        allowEmpty: false,
      },
    },
  };
  const dataValidate = await validate(request.payload, constraints);
  try {
    if (dataValidate) return h.response(dataValidate);
    const { isActive, age, eyeColor, company } = request.payload;
    const user = new User(isActive, age, eyeColor, company);
    await insertUser(user);
    return h.response(200);
  } catch (error) {
    return h.response(error);
  }
};

module.exports = {
  CreateOrValidate,
};
