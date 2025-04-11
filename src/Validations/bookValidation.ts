import Joi from "joi";

export const bookValidationSchema = Joi.object({
  title: Joi.string().min(3).max(50).regex(/^[A-Za-z0-9\s]+$/).required()
    .messages({
      "string.empty": "Title is required",
      "string.min": "Title must be at least 3 characters",
      "string.max": "Title must not exceed 50 characters",
      "string.pattern.base": "Title can only contain letters, numbers, and spaces",
    }),

  author: Joi.string().min(3).max(30).regex(/^[A-Za-z\s]+$/).required()
    .messages({
      "string.empty": "Author is required",
      "string.min": "Author name must be at least 3 characters",
      "string.max": "Author name must not exceed 30 characters",
      "string.pattern.base": "Author name must contain only letters and spaces",
    }),

  description: Joi.string().max(200).optional()
    .messages({
      "string.max": "Description must not exceed 200 characters",
    }),
});
