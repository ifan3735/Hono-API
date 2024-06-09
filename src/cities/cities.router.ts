



import { Hono } from "hono";
import { listCities, getCity, createOneCity, updateOneCity, deleteOneCity} from "./cities.controller"


export const cityRouter = new Hono();

//get all cities      api/cities
cityRouter.get("/cities", listCities);


//get a single city    api/cities/1
cityRouter.get("/cities/:id", getCity)

cityRouter.post("/cities", createOneCity)

cityRouter.put("/cities/:id", updateOneCity)

cityRouter.delete("/cities/:id", deleteOneCity)