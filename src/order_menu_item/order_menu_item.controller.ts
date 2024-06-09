import { Context } from "hono";
import { orderMenuItemsService, getOrderMenuItemService, createOrderMenuItem, updateOrderMenuItem, deleteOrderMenuItem } from "./order_menu_item.service";

const listOrderMenuItems = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await orderMenuItemsService(limit);
        if (data == null || data.length == 0) {
            return c.text("OrderMenuItem not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getOrderMenuItem = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const orderMenuItem = await getOrderMenuItemService(id);
    if (orderMenuItem == undefined) {
        return c.text("OrderMenuItem not found", 404);
    }
    return c.json(orderMenuItem, 200);
}

export{
    listOrderMenuItems,
        getOrderMenuItem
}

// create a new orderMenuItem in the database
export const createOneOrderMenuItem = async (c: Context) => {
    try {
        const orderMenuItem = await c.req.json();
       await createOrderMenuItem(orderMenuItem);
       return c.text("OrderMenuItem created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a orderMenuItem in the database

export const updateOneOrderMenuItem = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const orderMenuItem = await c.req.json();
        await updateOrderMenuItem(id, orderMenuItem);
        return c.text("OrderMenuItem updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a orderMenuItem from the database
export const deleteOneOrderMenuItem = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        await deleteOrderMenuItem(id);
        return c.text("OrderMenuItem deleted successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}