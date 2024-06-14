import { eq } from "drizzle-orm";
import {db}  from "../drizzle/db";
import { DriversSelect, driversTable } from "../drizzle/schema";

const driversService = async (limit?: number)=> {
    if (limit) {
        return await db.query.driversTable.findMany({
            limit: limit,
        });
    }
    return await db.query.driversTable.findMany();
}

const getDriverService = async (id: number)=> {
    return await db.query.driversTable.findFirst({
        where: eq(driversTable.id, id)
    })
}

export{
    driversService,
    getDriverService
}

// create a new driver in the database
export const createDriver = async (driver: DriversSelect)=> {
   await db.insert(driversTable).values(driver)
   return 'Driver created successfully';
}

// update a driver in the database
export const updateDriver = async (id: number, driver: any)=> {
    await db.update(driversTable).set(driver).where(eq(driversTable.id, id))
    return 'Driver updated successfully';
}

// delete a driver from the database
export const deleteDriver = async (id: number)=> {
    await db.delete(driversTable).where(eq(driversTable.id, id))
    return 'Driver deleted successfully';
}