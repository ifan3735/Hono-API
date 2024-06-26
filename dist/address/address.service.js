"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddress = exports.updateAddress = exports.createAddress = exports.getAddressService = exports.addressesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const addressesService = async (limit) => {
    if (limit) {
        return await db_1.db.query.addressTable.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.addressTable.findMany();
};
exports.addressesService = addressesService;
const getAddressService = async (id) => {
    return await db_1.db.query.addressTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.addressTable.id, id)
    });
};
exports.getAddressService = getAddressService;
// create a new address in the database
const createAddress = async (address) => {
    await db_1.db.insert(schema_1.addressTable).values(address);
    return 'Address created successfully';
};
exports.createAddress = createAddress;
// update an address in the database
const updateAddress = async (id, address) => {
    await db_1.db.update(schema_1.addressTable).set(address).where((0, drizzle_orm_1.eq)(schema_1.addressTable.id, id));
    return 'Address updated successfully';
};
exports.updateAddress = updateAddress;
// delete an address from the database
const deleteAddress = async (id) => {
    await db_1.db.delete(schema_1.addressTable).where((0, drizzle_orm_1.eq)(schema_1.addressTable.id, id));
    return 'Address deleted successfully';
};
exports.deleteAddress = deleteAddress;
