"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantOwnerRouter = void 0;
const hono_1 = require("hono");
const retaurantOwner_controller_1 = require("./retaurantOwner.controller");
exports.restaurantOwnerRouter = new hono_1.Hono();
//get all restaurantOwners      api/restaurantOwners
exports.restaurantOwnerRouter.get("/restaurantOwners", retaurantOwner_controller_1.listRestaurantOwners);
//get a single restaurantOwner    api/restaurantOwners/1
exports.restaurantOwnerRouter.get("/restaurantOwners/:id", retaurantOwner_controller_1.getRestaurantOwner);
exports.restaurantOwnerRouter.post("/restaurantOwners", retaurantOwner_controller_1.createOneRestaurantOwner);
exports.restaurantOwnerRouter.put("/restaurantOwners/:id", retaurantOwner_controller_1.updateOneRestaurantOwner);
exports.restaurantOwnerRouter.delete("/restaurantOwners/:id", retaurantOwner_controller_1.deleteOneRestaurantOwner);
