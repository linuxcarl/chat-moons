const joi = require('@hapi/joi');

const user = joi.string().min(1).max(20).required();
const message = joi.string().min(1).max(130).required();

const createMessageSchema = {
  user: user,
  message: message,
};
module.exports = {
  createMessageSchema
};
