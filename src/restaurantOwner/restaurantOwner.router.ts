import { Hono } from "hono";
import { listRestaurantOwners, getRestaurantOwner, createOneRestaurantOwner, updateOneRestaurantOwner, deleteOneRestaurantOwner} from "./retaurantOwner.controller"
export const restaurantOwnerRouter = new Hono();

//get all restaurantOwners      api/restaurantOwners
restaurantOwnerRouter.get("/restaurantOwners", listRestaurantOwners);

//get a single restaurantOwner    api/restaurantOwners/1
restaurantOwnerRouter.get("/restaurantOwners/:id", getRestaurantOwner)

restaurantOwnerRouter.post("/restaurantOwners", createOneRestaurantOwner)

restaurantOwnerRouter.put("/restaurantOwners/:id", updateOneRestaurantOwner)

restaurantOwnerRouter.delete("/restaurantOwners/:id", deleteOneRestaurantOwner)