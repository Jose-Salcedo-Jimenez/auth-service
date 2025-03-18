import Joi from "joi";
export const validateUser = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  lastName: Joi.string().min(3).max(50).required(),
  age: Joi.number().min(18).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  gender: Joi.string().required(),
  password: Joi.string().min(6).required(),
});
