import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { StatusCatalogSelect, statusCatalogTable } from "../drizzle/schema";

const statusCatalogService = async (limit?: number)=> {
    if (limit) {
        return await db.query.statusCatalogTable.findMany({
            limit: limit,
        });
    }
    return await db.query.statusCatalogTable.findMany();
}

const getStatusCatalogService = async (id: number)=> {
    return await db.query.statusCatalogTable.findFirst({
        where: eq(statusCatalogTable.id, id)
    })
}

export{
    statusCatalogService,
    getStatusCatalogService
}

// create a new statusCatalog in the database
export const createStatusCatalog = async (statusCatalog: StatusCatalogSelect)=> {
   await db.insert(statusCatalogTable).values(statusCatalog)
   return 'StatusCatalog created successfully';
}

// update a statusCatalog in the database
export const updateStatusCatalog = async (id: number, statusCatalog: StatusCatalogSelect)=> {
    await db.update(statusCatalogTable).set(statusCatalog).where(eq(statusCatalogTable.id, id))
    return 'StatusCatalog updated successfully';
}

// delete a statusCatalog from the database
export const deleteStatusCatalog = async (id: number)=> {
    await db.delete(statusCatalogTable).where(eq(statusCatalogTable.id, id))
    return 'StatusCatalog deleted successfully';
}