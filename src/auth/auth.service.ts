import { authTable } from "../drizzle/schema";
import db from "../drizzle/db";
import { sql } from "drizzle-orm";

export const createAuthUserService = async (user: any): Promise<string | null> => {
    await db.insert(authTable).values(user)
    return "User created successfully";
}

