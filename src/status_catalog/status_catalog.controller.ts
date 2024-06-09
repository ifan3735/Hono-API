import { Context } from "hono";
import { statusCatalogService, getStatusCatalogService, createStatusCatalog, updateStatusCatalog, deleteStatusCatalog } from "./status_catalog.service";

const listStatusCatalogs = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await statusCatalogService(limit);
        if (data == null || data.length == 0) {
            return c.text("StatusCatalog not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getStatusCatalog = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const status_catalog = await getStatusCatalogService(id);
    if (status_catalog == undefined) {
        return c.text("StatusCatalog not found", 404);
    }
    return c.json(status_catalog, 200);
}

export{
    listStatusCatalogs,
        getStatusCatalog
}

// create a new status_catalog in the database
export const createOneStatusCatalog = async (c: Context) => {
    try {
        const status_catalog = await c.req.json();
       await createStatusCatalog(status_catalog);
       return c.text("StatusCatalog created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a status_catalog in the database
export const updateOneStatusCatalog = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const status_catalog = await c.req.json();
        await updateStatusCatalog(id, status_catalog);
        return c.text("StatusCatalog updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a status_catalog from the database
export const deleteOneStatusCatalog = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        await deleteStatusCatalog(id);
        return c.text("StatusCatalog deleted successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}