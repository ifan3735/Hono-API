import { z } from 'zod';

export const registerUserSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  role: z.string(),
  password: z.string()
});