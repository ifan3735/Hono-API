"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneOrdersStatus = exports.updateOneOrdersStatus = exports.createOneOrdersStatus = exports.getOrdersStatus = exports.listOrdersStatus = void 0;
const orders_status_service_1 = require("./orders_status.service");
const listOrdersStatus = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, orders_status_service_1.ordersStatusService)(limit);
        if (data == null || data.length == 0) {
            return c.text("OrdersStatus not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listOrdersStatus = listOrdersStatus;
const getOrdersStatus = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const ordersStatus = await (0, orders_status_service_1.getOrdersStatusService)(id);
    if (ordersStatus == undefined) {
        return c.text("OrdersStatus not found", 404);
    }
    return c.json(ordersStatus, 200);
};
exports.getOrdersStatus = getOrdersStatus;
// create a new ordersStatus in the database
const createOneOrdersStatus = async (c) => {
    try {
        const ordersStatus = await c.req.json();
        await (0, orders_status_service_1.createOrdersStatus)(ordersStatus);
        return c.text("OrdersStatus created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneOrdersStatus = createOneOrdersStatus;
// update a ordersStatus in the database
const updateOneOrdersStatus = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const ordersStatus = await c.req.json();
        await (0, orders_status_service_1.updateOrdersStatus)(id, ordersStatus);
        return c.text("OrdersStatus updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneOrdersStatus = updateOneOrdersStatus;
// delete a ordersStatus from the database
const deleteOneOrdersStatus = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        await (0, orders_status_service_1.deleteOrdersStatus)(id);
        return c.text("OrdersStatus deleted successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneOrdersStatus = deleteOneOrdersStatus;
