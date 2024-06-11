import 'dotenv/config';
import { authTable } from "../drizzle/schema";
import db from "../drizzle/db";
import { Context } from "hono";
import { createAuthUserService } from "./auth.service";

import * as bcrypt from 'bcrypt';

export const authenticateUser = async (c: Context) => {
    try {
        const user = await c.req.json();
        const pass = user.password;
        const hashedPassword = await bcrypt.hash(pass, 10);
        user.password = hashedPassword;
        const createdUser = await createAuthUserService(user);
        if (!createdUser) return c.text("User not created", 404);
        return c.json({msg: createdUser}, 201);
    }
    catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}