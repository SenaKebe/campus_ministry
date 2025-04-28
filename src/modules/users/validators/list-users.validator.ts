import { z } from "zod";
import { USERROLE } from "../../../core/enums";

export const listUsersSchema = z.object({
  role: z.nativeEnum(USERROLE).optional(),
  page: z.number().int().positive().optional().default(1),
  limit: z.number().int().positive().max(100).optional().default(10),
  search: z.string().optional(),
});

export type ListUsersInput = z.infer<typeof listUsersSchema>;
