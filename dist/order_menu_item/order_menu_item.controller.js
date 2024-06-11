"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneOrderMenuItem = exports.updateOneOrderMenuItem = exports.createOneOrderMenuItem = exports.getOrderMenuItem = exports.listOrderMenuItems = void 0;
const order_menu_item_service_1 = require("./order_menu_item.service");
const listOrderMenuItems = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, order_menu_item_service_1.orderMenuItemsService)(limit);
        if (data == null || data.length == 0) {
            return c.text("OrderMenuItem not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listOrderMenuItems = listOrderMenuItems;
const getOrderMenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const orderMenuItem = await (0, order_menu_item_service_1.getOrderMenuItemService)(id);
    if (orderMenuItem == undefined) {
        return c.text("OrderMenuItem not found", 404);
    }
    return c.json(orderMenuItem, 200);
};
exports.getOrderMenuItem = getOrderMenuItem;
// create a new orderMenuItem in the database
const createOneOrderMenuItem = async (c) => {
    try {
        const orderMenuItem = await c.req.json();
        await (0, order_menu_item_service_1.createOrderMenuItem)(orderMenuItem);
        return c.text("OrderMenuItem created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneOrderMenuItem = createOneOrderMenuItem;
// update a orderMenuItem in the database
const updateOneOrderMenuItem = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const orderMenuItem = await c.req.json();
        await (0, order_menu_item_service_1.updateOrderMenuItem)(id, orderMenuItem);
        return c.text("OrderMenuItem updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneOrderMenuItem = updateOneOrderMenuItem;
// delete a orderMenuItem from the database
const deleteOneOrderMenuItem = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        await (0, order_menu_item_service_1.deleteOrderMenuItem)(id);
        return c.text("OrderMenuItem deleted successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneOrderMenuItem = deleteOneOrderMenuItem;
