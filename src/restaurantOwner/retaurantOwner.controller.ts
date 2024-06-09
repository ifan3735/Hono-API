import { Context } from "hono";
import { restaurantOwnersService, getRestaurantOwnerService, createRestaurantOwner, updateRestaurantOwner, deleteRestaurantOwner} from "./restaurantOwner.service"

const listRestaurantOwners = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await restaurantOwnersService(limit);
        if (data == null || data.length == 0) {
            return c.text("RestaurantOwner not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getRestaurantOwner = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const restaurantOwner = await getRestaurantOwnerService(id);
    if (restaurantOwner == undefined) {
        return c.text("RestaurantOwner not found", 404);
    }
    return c.json(restaurantOwner, 200);
}

export{
    listRestaurantOwners,
        getRestaurantOwner
}

// create a new restaurantOwner in the database
export const createOneRestaurantOwner = async (c: Context) => {
    try {
        const restaurantOwner = await c.req.json();
       await createRestaurantOwner(restaurantOwner);
       return c.text("RestaurantOwner created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a restaurantOwner in the database
export const updateOneRestaurantOwner = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const restaurantOwner = await c.req.json();
        await updateRestaurantOwner(id, restaurantOwner);
        return c.text("RestaurantOwner updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a restaurantOwner from the database
export const deleteOneRestaurantOwner = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        await deleteRestaurantOwner(id);
        return c.text("RestaurantOwner deleted successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}