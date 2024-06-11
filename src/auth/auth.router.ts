import { authenticateUser } from "./auth.controller";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { registerUserSchema } from "../validator";

export const authRouter = new Hono();

authRouter.post('/register', zValidator('json',registerUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), authenticateUser)