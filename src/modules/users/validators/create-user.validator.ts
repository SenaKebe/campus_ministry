import { z } from "zod";
import { USERROLE } from "../../../core/enums";

export const createUserSchema = z.object({
  email: z.string().email(),
  role: z.nativeEnum(USERROLE),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  password: z.string().min(8).optional(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
