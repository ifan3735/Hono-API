import { eq } from "drizzle-orm";
import {db}  from "../drizzle/db";
import { RestaurantOwnerSelect, restaurantOwnerTable } from "../drizzle/schema";

const restaurantOwnersService = async (limit?: number)=> {
    if (limit) {
        return await db.query.restaurantOwnerTable.findMany({
            limit: limit,
        });
    }
    return await db.query.restaurantOwnerTable.findMany();
}

const getRestaurantOwnerService = async (id: number)=> {
    return await db.query.restaurantOwnerTable.findFirst({
        where: eq(restaurantOwnerTable.id, id)
    })
}

export{
    restaurantOwnersService,
    getRestaurantOwnerService
}

// create a new restaurantOwner in the database
export const createRestaurantOwner = async (restaurantOwner: RestaurantOwnerSelect)=> {
   await db.insert(restaurantOwnerTable).values(restaurantOwner)
   return 'RestaurantOwner created successfully';
}

// update a restaurantOwner in the database
export const updateRestaurantOwner = async (id: number, restaurantOwner: RestaurantOwnerSelect)=> {
    await db.update(restaurantOwnerTable).set(restaurantOwner).where(eq(restaurantOwnerTable.id, id))
    return 'RestaurantOwner updated successfully';
}

// delete a restaurantOwner from the database
export const deleteRestaurantOwner = async (id: number)=> {
    await db.delete(restaurantOwnerTable).where(eq(restaurantOwnerTable.id, id))
    return 'RestaurantOwner deleted successfully';
}