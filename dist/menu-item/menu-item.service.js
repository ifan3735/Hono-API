"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuItem = exports.updateMenuItem = exports.createMenuItem = exports.getMenuItemService = exports.menuItemsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const menuItemsService = async (limit) => {
    if (limit) {
        return await db_1.db.query.menuItemsTable.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.menuItemsTable.findMany();
};
exports.menuItemsService = menuItemsService;
const getMenuItemService = async (id) => {
    return await db_1.db.query.menuItemsTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.menuItemsTable.id, id)
    });
};
exports.getMenuItemService = getMenuItemService;
// create a new menu item in the database
const createMenuItem = async (menuItem) => {
    await db_1.db.insert(schema_1.menuItemsTable).values(menuItem);
    return 'Menu item created successfully';
};
exports.createMenuItem = createMenuItem;
// update a menu item in the database
const updateMenuItem = async (id, menuItem) => {
    await db_1.db.update(schema_1.menuItemsTable).set(menuItem).where((0, drizzle_orm_1.eq)(schema_1.menuItemsTable.id, id));
    return 'Menu item updated successfully';
};
exports.updateMenuItem = updateMenuItem;
// delete a menu item from the database
const deleteMenuItem = async (id) => {
    await db_1.db.delete(schema_1.menuItemsTable).where((0, drizzle_orm_1.eq)(schema_1.menuItemsTable.id, id));
    return 'Menu item deleted successfully';
};
exports.deleteMenuItem = deleteMenuItem;
