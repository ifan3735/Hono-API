import { eq } from "drizzle-orm";
import {db}  from "../drizzle/db";
import { OrdersSelect, ordersTable } from "../drizzle/schema";

const ordersService = async (limit?: number)=> {
    if (limit) {
        return await db.query.ordersTable.findMany({
            limit: limit,
        });
    }
    return await db.query.ordersTable.findMany();
}

const getOrderService = async (id: number)=> {
    return await db.query.ordersTable.findFirst({
        where: eq(ordersTable.id, id)
    })
}

export{
    ordersService,
    getOrderService
}

// create a new order in the database
export const createOrder = async (order: OrdersSelect)=> {
   await db.insert(ordersTable).values(order)
   return 'Order created successfully';
}

// update an order in the database
export const updateOrder = async (id: number, order: any)=> {
    await db.update(ordersTable).set(order).where(eq(ordersTable.id, id))
    return 'Order updated successfully';
}

// delete an order from the database
export const deleteOrder = async (id: number)=> {
    await db.delete(ordersTable).where(eq(ordersTable.id, id))
    return 'Order deleted successfully';
}