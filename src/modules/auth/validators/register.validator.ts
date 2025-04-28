import { z } from "zod";
import { USERROLE } from "@prisma/client";

export const validateRegister = (data: unknown) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    role: z.nativeEnum(USERROLE),
    firstName: z.string().min(2),
    lastName: z.string().min(2),
  });

  return schema.safeParse(data);
};
