"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneRestaurantOwner = exports.updateOneRestaurantOwner = exports.createOneRestaurantOwner = exports.getRestaurantOwner = exports.listRestaurantOwners = void 0;
const restaurantOwner_service_1 = require("./restaurantOwner.service");
const listRestaurantOwners = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, restaurantOwner_service_1.restaurantOwnersService)(limit);
        if (data == null || data.length == 0) {
            return c.text("RestaurantOwner not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listRestaurantOwners = listRestaurantOwners;
const getRestaurantOwner = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const restaurantOwner = await (0, restaurantOwner_service_1.getRestaurantOwnerService)(id);
    if (restaurantOwner == undefined) {
        return c.text("RestaurantOwner not found", 404);
    }
    return c.json(restaurantOwner, 200);
};
exports.getRestaurantOwner = getRestaurantOwner;
// create a new restaurantOwner in the database
const createOneRestaurantOwner = async (c) => {
    try {
        const restaurantOwner = await c.req.json();
        await (0, restaurantOwner_service_1.createRestaurantOwner)(restaurantOwner);
        return c.text("RestaurantOwner created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneRestaurantOwner = createOneRestaurantOwner;
// update a restaurantOwner in the database
const updateOneRestaurantOwner = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const restaurantOwner = await c.req.json();
        await (0, restaurantOwner_service_1.updateRestaurantOwner)(id, restaurantOwner);
        return c.text("RestaurantOwner updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneRestaurantOwner = updateOneRestaurantOwner;
// delete a restaurantOwner from the database
const deleteOneRestaurantOwner = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        await (0, restaurantOwner_service_1.deleteRestaurantOwner)(id);
        return c.text("RestaurantOwner deleted successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneRestaurantOwner = deleteOneRestaurantOwner;
