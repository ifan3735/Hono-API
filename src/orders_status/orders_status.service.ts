import { eq } from "drizzle-orm";
import {db}  from "../drizzle/db";
import { OrdersStatusSelect, ordersStatusTable } from "../drizzle/schema";

const ordersStatusService = async (limit?: number)=> {
    if (limit) {
        return await db.query.ordersStatusTable.findMany({
            limit: limit,
        });
    }
    return await db.query.ordersStatusTable.findMany();
}

const getOrdersStatusService = async (id: number)=> {
    return await db.query.ordersStatusTable.findFirst({
        where: eq(ordersStatusTable.id, id)
    })
}

export{
    ordersStatusService,
    getOrdersStatusService
}

// create a new ordersStatus in the database
export const createOrdersStatus = async (ordersStatus: OrdersStatusSelect)=> {
   await db.insert(ordersStatusTable).values(ordersStatus)
   return 'OrdersStatus created successfully';
}

// update a ordersStatus in the database
export const updateOrdersStatus = async (id: number, ordersStatus: OrdersStatusSelect)=> {
    await db.update(ordersStatusTable).set(ordersStatus).where(eq(ordersStatusTable.id, id))
    return 'OrdersStatus updated successfully';
}

// delete a ordersStatus from the database
export const deleteOrdersStatus = async (id: number)=> {
    await db.delete(ordersStatusTable).where(eq(ordersStatusTable.id, id))
    return 'OrdersStatus deleted successfully';
}