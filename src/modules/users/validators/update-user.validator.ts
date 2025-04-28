import { z } from "zod";
import { USERROLE } from "../../../core/enums";

export const updateUserSchema = z.object({
  isActive: z.boolean().optional(),
  role: z.nativeEnum(USERROLE).optional(),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;
