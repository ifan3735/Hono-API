import { Context } from "hono";
import { citiesService, getCityService, createCity, updateCity, deleteCity } from "./cities.service";

const listCities = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await citiesService(limit);
        if (data == null || data.length == 0) {
            return c.text("City not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getCity = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const city = await getCityService(id);
    if (city == undefined) {
        return c.text("City not found", 404);
    }
    return c.json(city, 200);
}

export{
    listCities,
        getCity
}

// create a new city in the database
export const createOneCity = async (c: Context) => {
    
    try {
        const city =await c.req.json();
       await createCity(city);
       return c.text("city created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a city in the database
export const updateOneCity = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const city = await c.req.json();
        await updateCity(id, city);
        return c.text("City updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a city from the database
export const deleteOneCity = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const response= await deleteCity(id);
        return c.json({msg: response}, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}