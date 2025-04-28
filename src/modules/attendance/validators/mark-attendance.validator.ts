import Joi from "joi";

const markAttendanceSchema = Joi.object({
  studentId: Joi.string().required(),
  date: Joi.string().isoDate().required(),
  status: Joi.string().valid("PRESENT", "ABSENT").required(),
});

export function validateMarkAttendance(payload: any) {
  const { error, value } = markAttendanceSchema.validate(payload);
  if (error) throw new Error(error.message);
  return value;
}
