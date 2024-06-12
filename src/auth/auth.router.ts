import { authenticateUser, signup } from "./auth.controller";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginUserSchema, registerUserSchema } from "../validator";

export const authRouter = new Hono();

authRouter.post('/sign', zValidator('json',registerUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), authenticateUser)

authRouter.post('/login', zValidator('json',loginUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), signup)

authRouter.get
