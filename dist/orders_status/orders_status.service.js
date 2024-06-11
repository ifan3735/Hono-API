"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrdersStatus = exports.updateOrdersStatus = exports.createOrdersStatus = exports.getOrdersStatusService = exports.ordersStatusService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const ordersStatusService = async (limit) => {
    if (limit) {
        return await db_1.default.query.ordersStatusTable.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.ordersStatusTable.findMany();
};
exports.ordersStatusService = ordersStatusService;
const getOrdersStatusService = async (id) => {
    return await db_1.default.query.ordersStatusTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.ordersStatusTable.id, id)
    });
};
exports.getOrdersStatusService = getOrdersStatusService;
// create a new ordersStatus in the database
const createOrdersStatus = async (ordersStatus) => {
    await db_1.default.insert(schema_1.ordersStatusTable).values(ordersStatus);
    return 'OrdersStatus created successfully';
};
exports.createOrdersStatus = createOrdersStatus;
// update a ordersStatus in the database
const updateOrdersStatus = async (id, ordersStatus) => {
    await db_1.default.update(schema_1.ordersStatusTable).set(ordersStatus).where((0, drizzle_orm_1.eq)(schema_1.ordersStatusTable.id, id));
    return 'OrdersStatus updated successfully';
};
exports.updateOrdersStatus = updateOrdersStatus;
// delete a ordersStatus from the database
const deleteOrdersStatus = async (id) => {
    await db_1.default.delete(schema_1.ordersStatusTable).where((0, drizzle_orm_1.eq)(schema_1.ordersStatusTable.id, id));
    return 'OrdersStatus deleted successfully';
};
exports.deleteOrdersStatus = deleteOrdersStatus;
