"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderMenuItem = exports.updateOrderMenuItem = exports.createOrderMenuItem = exports.getOrderMenuItemService = exports.orderMenuItemsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const orderMenuItemsService = async (limit) => {
    if (limit) {
        return await db_1.default.query.orderMenuItemTable.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.orderMenuItemTable.findMany();
};
exports.orderMenuItemsService = orderMenuItemsService;
const getOrderMenuItemService = async (id) => {
    return await db_1.default.query.orderMenuItemTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.orderMenuItemTable.id, id)
    });
};
exports.getOrderMenuItemService = getOrderMenuItemService;
// create a new orderMenuItem in the database
const createOrderMenuItem = async (orderMenuItem) => {
    await db_1.default.insert(schema_1.orderMenuItemTable).values(orderMenuItem);
    return 'OrderMenuItem created successfully';
};
exports.createOrderMenuItem = createOrderMenuItem;
// update a orderMenuItem in the database
const updateOrderMenuItem = async (id, orderMenuItem) => {
    await db_1.default.update(schema_1.orderMenuItemTable).set(orderMenuItem).where((0, drizzle_orm_1.eq)(schema_1.orderMenuItemTable.id, id));
    return 'OrderMenuItem updated successfully';
};
exports.updateOrderMenuItem = updateOrderMenuItem;
// delete a orderMenuItem from the database
const deleteOrderMenuItem = async (id) => {
    await db_1.default.delete(schema_1.orderMenuItemTable).where((0, drizzle_orm_1.eq)(schema_1.orderMenuItemTable.id, id));
    return 'OrderMenuItem deleted successfully';
};
exports.deleteOrderMenuItem = deleteOrderMenuItem;
