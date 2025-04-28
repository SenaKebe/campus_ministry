import Joi from "joi";

const batchSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().integer().min(2000).max(2100).required(),
});

export function validateBatch(payload: any) {
  const { error, value } = batchSchema.validate(payload);
  if (error) throw new Error(error.message);
  return value;
}
