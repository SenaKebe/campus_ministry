import Joi from "joi";

const courseSchema = Joi.object({
  name: Joi.string().required(),
  code: Joi.string().alphanum().required(),
  creditHour: Joi.number().integer().min(1).max(10).required(),
});

export function validateCourse(payload: any) {
  const { error, value } = courseSchema.validate(payload);
  if (error) throw new Error(error.message);
  return value;
}
