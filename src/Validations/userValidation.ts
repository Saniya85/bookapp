import Joi from "joi";

export const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).regex(/^[A-Za-z\s]+$/).required()
    .messages({
      "string.empty": "Name is required",
      "string.pattern.base": "Name must contain only letters and spaces",
      "string.min": "Name must be at least 3 characters long",
      "string.max": "Name must not exceed 30 characters",
    }),

  email: Joi.string().email().required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Enter a valid email address",
    }),

  password: Joi.string()
    .min(8)
    .max(20)
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password must not exceed 20 characters",
      "string.pattern.base":
        "Password must have at least one uppercase letter, one number, and one special character",
    }),

  role: Joi.string().valid("user", "admin").required()
    .messages({
      "string.empty": "Role is required",
      "any.only": "Role must be either 'user' or 'admin'",
    }),
});
