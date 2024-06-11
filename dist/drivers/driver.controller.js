"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneDriver = exports.updateOneDriver = exports.createOneDriver = exports.getDriver = exports.listDrivers = void 0;
const driver_service_1 = require("./driver.service");
const listDrivers = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, driver_service_1.driversService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Driver not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listDrivers = listDrivers;
const getDriver = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const driver = await (0, driver_service_1.getDriverService)(id);
    if (driver == undefined) {
        return c.text("Driver not found", 404);
    }
    return c.json(driver, 200);
};
exports.getDriver = getDriver;
// create a new driver in the database
const createOneDriver = async (c) => {
    try {
        const driver = await c.req.json();
        await (0, driver_service_1.createDriver)(driver);
        return c.text("Driver created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneDriver = createOneDriver;
// update a driver in the database
const updateOneDriver = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const driver = await c.req.json();
        await (0, driver_service_1.updateDriver)(id, driver);
        return c.text("Driver updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneDriver = updateOneDriver;
// delete a driver from the database
const deleteOneDriver = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const response = await (0, driver_service_1.deleteDriver)(id);
        return c.json({ msg: response }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneDriver = deleteOneDriver;
