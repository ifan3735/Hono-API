import { Context } from "hono";
import { menuItemsService, getMenuItemService, createMenuItem, updateMenuItem,deleteMenuItem } from "./menu-item.service";

const listMenuItems = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await menuItemsService(limit);
        if (data == null || data.length == 0) {
            return c.text("Menu item not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getMenuItem = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const menuItem = await getMenuItemService(id);
    if (menuItem == undefined) {
        return c.text("Menu item not found", 404);
    }
    return c.json(menuItem, 200);
}

export{
    listMenuItems,
        getMenuItem
}

// create a new menu item in the database
export const createOneMenuItem = async (c: Context) => {
    try {
        const menuItem = await c.req.json();
       await createMenuItem(menuItem);
       return c.text("Menu item created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a menu item in the database
export const updateOneMenuItem = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const menuItem = await c.req.json();
        await updateMenuItem(id, menuItem);
        return c.text("Menu item updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a menu item from the database
export const deleteOneMenuItem = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        await deleteMenuItem(id);
        return c.text("Menu item deleted successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}