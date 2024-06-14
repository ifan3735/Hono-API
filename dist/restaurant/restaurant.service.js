"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurant = exports.updateRestaurant = exports.createRestaurant = exports.getRestaurantService = exports.restaurantsService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const restaurantsService = async (limit) => {
    if (limit) {
        return await db_1.db.query.restaurantTable.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.restaurantTable.findMany();
};
exports.restaurantsService = restaurantsService;
const getRestaurantService = async (id) => {
    return await db_1.db.query.restaurantTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id)
    });
};
exports.getRestaurantService = getRestaurantService;
// create a new restaurant in the database
const createRestaurant = async (restaurant) => {
    await db_1.db.insert(schema_1.restaurantTable).values(restaurant);
    return 'Restaurant created successfully';
};
exports.createRestaurant = createRestaurant;
// update a restaurant in the database
const updateRestaurant = async (id, restaurant) => {
    await db_1.db.update(schema_1.restaurantTable).set(restaurant).where((0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id));
    return 'Restaurant updated successfully';
};
exports.updateRestaurant = updateRestaurant;
// delete a restaurant from the database
const deleteRestaurant = async (id) => {
    await db_1.db.delete(schema_1.restaurantTable).where((0, drizzle_orm_1.eq)(schema_1.restaurantTable.id, id));
    return 'Restaurant deleted successfully';
};
exports.deleteRestaurant = deleteRestaurant;
