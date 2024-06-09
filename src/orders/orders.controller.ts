import { Context } from "hono";
import { ordersService, getOrderService, createOrder, updateOrder, deleteOrder } from "./orders.services";

const listOrders = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await ordersService(limit);
        if (data == null || data.length == 0) {
            return c.text("Order not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getOrder = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const order = await getOrderService(id);
    if (order == undefined) {
        return c.text("Order not found", 404);
    }
    return c.json(order, 200);
}

export{
    listOrders,
        getOrder
}

// create a new order in the database
export const createOneOrder = async (c: Context) => {
    try {
        const order = await c.req.json();
       await createOrder(order);
       return c.text("Order created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a order in the database
export const updateOneOrder = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const order = await c.req.json();
        await updateOrder(id, order);
        return c.text("Order updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a order from the database
export const deleteOneOrder = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        await deleteOrder(id);
        return c.text("Order deleted successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}