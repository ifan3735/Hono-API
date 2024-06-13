"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneMenuItem = exports.updateOneMenuItem = exports.createOneMenuItem = exports.getMenuItem = exports.listMenuItems = void 0;
const menu_item_service_1 = require("./menu-item.service");
const listMenuItems = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, menu_item_service_1.menuItemsService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Menu item not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listMenuItems = listMenuItems;
const getMenuItem = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const menuItem = await (0, menu_item_service_1.getMenuItemService)(id);
    if (menuItem == undefined) {
        return c.text("Menu item not found", 404);
    }
    return c.json(menuItem, 200);
};
exports.getMenuItem = getMenuItem;
// create a new menu item in the database
const createOneMenuItem = async (c) => {
    try {
        const menuItem = await c.req.json();
        await (0, menu_item_service_1.createMenuItem)(menuItem);
        return c.text("Menu item created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneMenuItem = createOneMenuItem;
// update a menu item in the database
const updateOneMenuItem = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const menuItem = await c.req.json();
        await (0, menu_item_service_1.updateMenuItem)(id, menuItem);
        return c.text("Menu item updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneMenuItem = updateOneMenuItem;
// delete a menu item from the database
const deleteOneMenuItem = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        await (0, menu_item_service_1.deleteMenuItem)(id);
        return c.text("Menu item deleted successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneMenuItem = deleteOneMenuItem;
