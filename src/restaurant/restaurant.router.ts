import { Hono } from "hono";
import { listRestaurants, getRestaurant, createOneRestaurant, updateOneRestaurant, deleteOneRestaurant} from "./restaurant.controller"
export const restaurantRouter = new Hono();

//get all restaurants      api/restaurants
restaurantRouter.get("/restaurants", listRestaurants);

//get a single restaurant    api/restaurants/1
restaurantRouter.get("/restaurants/:id", getRestaurant)

restaurantRouter.post("/restaurants", createOneRestaurant)

restaurantRouter.put("/restaurants/:id", updateOneRestaurant)

restaurantRouter.delete("/restaurants/:id", deleteOneRestaurant)