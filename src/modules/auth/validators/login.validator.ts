import { z } from "zod";

export const validateLogin = (data: unknown) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  return schema.safeParse(data);
};
