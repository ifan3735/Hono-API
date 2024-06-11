"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantRouter = void 0;
const hono_1 = require("hono");
const restaurant_controller_1 = require("./restaurant.controller");
exports.restaurantRouter = new hono_1.Hono();
//get all restaurants      api/restaurants
exports.restaurantRouter.get("/restaurants", restaurant_controller_1.listRestaurants);
//get a single restaurant    api/restaurants/1
exports.restaurantRouter.get("/restaurants/:id", restaurant_controller_1.getRestaurant);
exports.restaurantRouter.post("/restaurants", restaurant_controller_1.createOneRestaurant);
exports.restaurantRouter.put("/restaurants/:id", restaurant_controller_1.updateOneRestaurant);
exports.restaurantRouter.delete("/restaurants/:id", restaurant_controller_1.deleteOneRestaurant);
