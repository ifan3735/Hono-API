"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.createOrder = exports.getOrderService = exports.ordersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const ordersService = async (limit) => {
    if (limit) {
        return await db_1.db.query.ordersTable.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.ordersTable.findMany();
};
exports.ordersService = ordersService;
const getOrderService = async (id) => {
    return await db_1.db.query.ordersTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id)
    });
};
exports.getOrderService = getOrderService;
// create a new order in the database
const createOrder = async (order) => {
    await db_1.db.insert(schema_1.ordersTable).values(order);
    return 'Order created successfully';
};
exports.createOrder = createOrder;
// update an order in the database
const updateOrder = async (id, order) => {
    await db_1.db.update(schema_1.ordersTable).set(order).where((0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id));
    return 'Order updated successfully';
};
exports.updateOrder = updateOrder;
// delete an order from the database
const deleteOrder = async (id) => {
    await db_1.db.delete(schema_1.ordersTable).where((0, drizzle_orm_1.eq)(schema_1.ordersTable.id, id));
    return 'Order deleted successfully';
};
exports.deleteOrder = deleteOrder;
