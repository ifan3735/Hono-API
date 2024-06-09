import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { CitySelect, cityTable } from "../drizzle/schema";

const citiesService = async (limit?: number)=> {
    if (limit) {
        return await db.query.cityTable.findMany({
            limit: limit,
        });
    }
    return await db.query.cityTable.findMany();
}

const getCityService = async (id: number)=> {
    return await db.query.cityTable.findFirst({
        where: eq(cityTable.id, id)
    })
}

export{
    citiesService,
    getCityService,
}  

// create a new city in the database
export const createCity = async (city: CitySelect)=> {
   await db.insert(cityTable).values(city)
   return 'City created successfully';
}

// update a city in the database
export const updateCity = async (id: number, city: CitySelect)=> {
    await db.update(cityTable).set(city).where(eq(cityTable.id, id))
    return 'City updated successfully';
}

// delete a city from the database
export const deleteCity = async (id: number)=> {
    await db.delete(cityTable).where(eq(cityTable.id, id))
    return 'City deleted successfully';
}