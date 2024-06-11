import { Context } from "hono";
import { usersService, getUserService, createUser, updateUser, deleteOneUser} from "./users.service";
import { UsersSelect } from "../drizzle/schema";
import { serial } from "drizzle-orm/mysql-core";
import * as bcrypt from "bcrypt";


const listUsers = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await usersService(limit);
        if (data == null || data.length == 0) {
            return c.text("User not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getUser = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const user = await getUserService(id);
    if (user == undefined) {
        return c.text("User not found", 404);
    }
    return c.json(user, 200);
}

export{
    listUsers,
    getUser
}

export const createOneUser = async (c: Context) => {
    try {
        const user = await c.req.json();
        const password = user.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await createUser(user);
        return c.text("User created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const updateOneUser = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const user = await c.req.json();
        await updateUser(id, user);
        return c.text("User updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

export const deleteUser = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const response= await deleteOneUser(id);
        return c.json({msg: response}, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}