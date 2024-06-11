"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneOrder = exports.updateOneOrder = exports.createOneOrder = exports.getOrder = exports.listOrders = void 0;
const orders_services_1 = require("./orders.services");
const listOrders = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, orders_services_1.ordersService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Order not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listOrders = listOrders;
const getOrder = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const order = await (0, orders_services_1.getOrderService)(id);
    if (order == undefined) {
        return c.text("Order not found", 404);
    }
    return c.json(order, 200);
};
exports.getOrder = getOrder;
// create a new order in the database
const createOneOrder = async (c) => {
    try {
        const order = await c.req.json();
        await (0, orders_services_1.createOrder)(order);
        return c.text("Order created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneOrder = createOneOrder;
// update a order in the database
const updateOneOrder = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const order = await c.req.json();
        await (0, orders_services_1.updateOrder)(id, order);
        return c.text("Order updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneOrder = updateOneOrder;
// delete a order from the database
const deleteOneOrder = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        await (0, orders_services_1.deleteOrder)(id);
        return c.text("Order deleted successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneOrder = deleteOneOrder;
