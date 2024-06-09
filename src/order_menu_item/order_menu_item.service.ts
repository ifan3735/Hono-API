import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { OrderMenuItemSelect, orderMenuItemTable } from "../drizzle/schema";

const orderMenuItemsService = async (limit?: number)=> {
    if (limit) {
        return await db.query.orderMenuItemTable.findMany({
            limit: limit,
        });
    }
    return await db.query.orderMenuItemTable.findMany();
}

const getOrderMenuItemService = async (id: number)=> {
    return await db.query.orderMenuItemTable.findFirst({
        where: eq(orderMenuItemTable.id, id)
    })
}

export{
    orderMenuItemsService,
    getOrderMenuItemService
}

// create a new orderMenuItem in the database
export const createOrderMenuItem = async (orderMenuItem: OrderMenuItemSelect)=> {
   await db.insert(orderMenuItemTable).values(orderMenuItem)
   return 'OrderMenuItem created successfully';
}

// update a orderMenuItem in the database

export const updateOrderMenuItem = async (id: number, orderMenuItem: OrderMenuItemSelect)=> {
    await db.update(orderMenuItemTable).set(orderMenuItem).where(eq(orderMenuItemTable.id, id))
    return 'OrderMenuItem updated successfully';
}

// delete a orderMenuItem from the database
export const deleteOrderMenuItem = async (id: number)=> {
    await db.delete(orderMenuItemTable).where(eq(orderMenuItemTable.id, id))
    return 'OrderMenuItem deleted successfully';
}