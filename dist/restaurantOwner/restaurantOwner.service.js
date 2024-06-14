"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurantOwner = exports.updateRestaurantOwner = exports.createRestaurantOwner = exports.getRestaurantOwnerService = exports.restaurantOwnersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const restaurantOwnersService = async (limit) => {
    if (limit) {
        return await db_1.db.query.restaurantOwnerTable.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.restaurantOwnerTable.findMany();
};
exports.restaurantOwnersService = restaurantOwnersService;
const getRestaurantOwnerService = async (id) => {
    return await db_1.db.query.restaurantOwnerTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurantOwnerTable.id, id)
    });
};
exports.getRestaurantOwnerService = getRestaurantOwnerService;
// create a new restaurantOwner in the database
const createRestaurantOwner = async (restaurantOwner) => {
    await db_1.db.insert(schema_1.restaurantOwnerTable).values(restaurantOwner);
    return 'RestaurantOwner created successfully';
};
exports.createRestaurantOwner = createRestaurantOwner;
// update a restaurantOwner in the database
const updateRestaurantOwner = async (id, restaurantOwner) => {
    await db_1.db.update(schema_1.restaurantOwnerTable).set(restaurantOwner).where((0, drizzle_orm_1.eq)(schema_1.restaurantOwnerTable.id, id));
    return 'RestaurantOwner updated successfully';
};
exports.updateRestaurantOwner = updateRestaurantOwner;
// delete a restaurantOwner from the database
const deleteRestaurantOwner = async (id) => {
    await db_1.db.delete(schema_1.restaurantOwnerTable).where((0, drizzle_orm_1.eq)(schema_1.restaurantOwnerTable.id, id));
    return 'RestaurantOwner deleted successfully';
};
exports.deleteRestaurantOwner = deleteRestaurantOwner;
