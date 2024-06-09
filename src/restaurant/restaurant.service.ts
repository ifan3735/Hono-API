import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { RestaurantSelect,restaurantTable } from "../drizzle/schema";

const restaurantsService = async (limit?: number)=> {
    if (limit) {
        return await db.query.restaurantTable.findMany({
            limit: limit,
        });
    }
    return await db.query.restaurantTable.findMany();
}

const getRestaurantService = async (id: number)=> {
    return await db.query.restaurantTable.findFirst({
        where: eq(restaurantTable.id, id)
    })
}

export{
    restaurantsService,
    getRestaurantService
}

// create a new restaurant in the database
export const createRestaurant = async (restaurant: RestaurantSelect)=> {
   await db.insert(restaurantTable).values(restaurant)
   return 'Restaurant created successfully';
}

// update a restaurant in the database
export const updateRestaurant = async (id: number, restaurant: any)=> {
    await db.update(restaurantTable).set(restaurant).where(eq(restaurantTable.id, id))
    return 'Restaurant updated successfully';
}

// delete a restaurant from the database
export const deleteRestaurant = async (id: number)=> {
    await db.delete(restaurantTable).where(eq(restaurantTable.id, id))
    return 'Restaurant deleted successfully';
}