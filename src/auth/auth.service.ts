import { authTable } from "../drizzle/schema";
import db from "../drizzle/db";
import { sql } from "drizzle-orm";

export const createAuthUserService = async (user: any): Promise<string | null> => {
    await db.insert(authTable).values(user)
    return "User created successfully";
}

export const userLoginService = async (user: any) => {
    const {  password, username } = user;
    return await db.query.authTable.findFirst({
        columns: {
            username: true,
            role: true,
            password: true
        }, 
        where: sql` ${authTable.username} = ${username}`,
        with: {
            user: {
                columns: {
                   id: true,
                   name: true,
                   contact_phone: true,
                   email: true,
                   confirmation_code: true
                }
            }
        }
    })
}
