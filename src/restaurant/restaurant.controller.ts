import { Context } from "hono";
import { restaurantsService, getRestaurantService, createRestaurant, updateRestaurant, deleteRestaurant } from "./restaurant.service";

const listRestaurants = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await restaurantsService(limit);
        if (data == null || data.length == 0) {
            return c.text("Restaurant not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getRestaurant = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const restaurant = await getRestaurantService(id);
    if (restaurant == undefined) {
        return c.text("Restaurant not found", 404);
    }
    return c.json(restaurant, 200);
}

export{
    listRestaurants,
        getRestaurant
}

// create a new restaurant in the database
export const createOneRestaurant = async (c: Context) => {
    try {
        const restaurant = await c.req.json();
       await createRestaurant(restaurant);
       return c.text("Restaurant created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a restaurant in the database
export const updateOneRestaurant = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const restaurant = await c.req.json();
        await updateRestaurant(id, restaurant);
        return c.text("Restaurant updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a restaurant from the database
export const deleteOneRestaurant = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        await deleteRestaurant(id);
        return c.text("Restaurant deleted successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}