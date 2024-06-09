import { Context } from "hono";
import { driversService, getDriverService, createDriver, updateDriver, deleteDriver } from "./driver.service";

const listDrivers = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await driversService(limit);
        if (data == null || data.length == 0) {
            return c.text("Driver not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getDriver = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const driver = await getDriverService(id);
    if (driver == undefined) {
        return c.text("Driver not found", 404);
    }
    return c.json(driver, 200);
}

export{
    listDrivers,
        getDriver
}

// create a new driver in the database
export const createOneDriver = async (c: Context) => {
    try {
        const driver = await c.req.json();
       await createDriver(driver);
       return c.text("Driver created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a driver in the database
export const updateOneDriver = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const driver = await c.req.json();
        await updateDriver(id, driver);
        return c.text("Driver updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a driver from the database
export const deleteOneDriver = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const response= await deleteDriver(id);
        return c.json({msg: response}, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}