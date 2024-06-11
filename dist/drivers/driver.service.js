"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriver = exports.updateDriver = exports.createDriver = exports.getDriverService = exports.driversService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const driversService = async (limit) => {
    if (limit) {
        return await db_1.default.query.driversTable.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.driversTable.findMany();
};
exports.driversService = driversService;
const getDriverService = async (id) => {
    return await db_1.default.query.driversTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.driversTable.id, id)
    });
};
exports.getDriverService = getDriverService;
// create a new driver in the database
const createDriver = async (driver) => {
    await db_1.default.insert(schema_1.driversTable).values(driver);
    return 'Driver created successfully';
};
exports.createDriver = createDriver;
// update a driver in the database
const updateDriver = async (id, driver) => {
    await db_1.default.update(schema_1.driversTable).set(driver).where((0, drizzle_orm_1.eq)(schema_1.driversTable.id, id));
    return 'Driver updated successfully';
};
exports.updateDriver = updateDriver;
// delete a driver from the database
const deleteDriver = async (id) => {
    await db_1.default.delete(schema_1.driversTable).where((0, drizzle_orm_1.eq)(schema_1.driversTable.id, id));
    return 'Driver deleted successfully';
};
exports.deleteDriver = deleteDriver;
