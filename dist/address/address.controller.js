"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneAddress = exports.updateOneAddress = exports.createOneAddress = exports.getAddress = exports.listAddresses = void 0;
const address_service_1 = require("./address.service");
const listAddresses = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, address_service_1.addressesService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Address not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listAddresses = listAddresses;
const getAddress = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const address = await (0, address_service_1.getAddressService)(id);
    if (address == undefined) {
        return c.text("Address not found", 404);
    }
    return c.json(address, 200);
};
exports.getAddress = getAddress;
// create a new address in the database
const createOneAddress = async (c) => {
    try {
        const address = await c.req.json();
        await (0, address_service_1.createAddress)(address);
        return c.text("Address created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneAddress = createOneAddress;
// update a address in the database
const updateOneAddress = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const address = await c.req.json();
        await (0, address_service_1.updateAddress)(id, address);
        return c.text("Address updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneAddress = updateOneAddress;
// delete a address from the database
const deleteOneAddress = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        await (0, address_service_1.deleteAddress)(id);
        return c.text("Address deleted successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneAddress = deleteOneAddress;
