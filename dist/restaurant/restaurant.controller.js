"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneRestaurant = exports.updateOneRestaurant = exports.createOneRestaurant = exports.getRestaurant = exports.listRestaurants = void 0;
const restaurant_service_1 = require("./restaurant.service");
const listRestaurants = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, restaurant_service_1.restaurantsService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Restaurant not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listRestaurants = listRestaurants;
const getRestaurant = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const restaurant = await (0, restaurant_service_1.getRestaurantService)(id);
    if (restaurant == undefined) {
        return c.text("Restaurant not found", 404);
    }
    return c.json(restaurant, 200);
};
exports.getRestaurant = getRestaurant;
// create a new restaurant in the database
const createOneRestaurant = async (c) => {
    try {
        const restaurant = await c.req.json();
        await (0, restaurant_service_1.createRestaurant)(restaurant);
        return c.text("Restaurant created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneRestaurant = createOneRestaurant;
// update a restaurant in the database
const updateOneRestaurant = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const restaurant = await c.req.json();
        await (0, restaurant_service_1.updateRestaurant)(id, restaurant);
        return c.text("Restaurant updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneRestaurant = updateOneRestaurant;
// delete a restaurant from the database
const deleteOneRestaurant = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        await (0, restaurant_service_1.deleteRestaurant)(id);
        return c.text("Restaurant deleted successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneRestaurant = deleteOneRestaurant;
