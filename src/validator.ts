import { z } from 'zod';

export const registerUserSchema = z.object({
  user_id: z.number(),
  username: z.string(),
  role: z.string(),
  password: z.string()
});

export const loginUserSchema = z.object({
  username: z.string(),
  password: z.string()
});