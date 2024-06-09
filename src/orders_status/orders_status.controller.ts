import { Context } from "hono";
import { ordersStatusService, getOrdersStatusService, createOrdersStatus, updateOrdersStatus, deleteOrdersStatus } from "./orders_status.service";

const listOrdersStatus = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await ordersStatusService(limit);
        if (data == null || data.length == 0) {
            return c.text("OrdersStatus not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getOrdersStatus = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const ordersStatus = await getOrdersStatusService(id);
    if (ordersStatus == undefined) {
        return c.text("OrdersStatus not found", 404);
    }
    return c.json(ordersStatus, 200);
}

export{
    listOrdersStatus,
        getOrdersStatus
}

// create a new ordersStatus in the database
export const createOneOrdersStatus = async (c: Context) => {
    try {
        const ordersStatus = await c.req.json();
       await createOrdersStatus(ordersStatus);
       return c.text("OrdersStatus created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a ordersStatus in the database
export const updateOneOrdersStatus = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const ordersStatus = await c.req.json();
        await updateOrdersStatus(id, ordersStatus);
        return c.text("OrdersStatus updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a ordersStatus from the database
export const deleteOneOrdersStatus = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        await deleteOrdersStatus(id);
        return c.text("OrdersStatus deleted successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}