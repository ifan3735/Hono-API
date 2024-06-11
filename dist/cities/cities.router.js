"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const hono_1 = require("hono");
const cities_controller_1 = require("./cities.controller");
exports.cityRouter = new hono_1.Hono();
//get all cities      api/cities
exports.cityRouter.get("/cities", cities_controller_1.listCities);
//get a single city    api/cities/1
exports.cityRouter.get("/cities/:id", cities_controller_1.getCity);
exports.cityRouter.post("/cities", cities_controller_1.createOneCity);
exports.cityRouter.put("/cities/:id", cities_controller_1.updateOneCity);
exports.cityRouter.delete("/cities/:id", cities_controller_1.deleteOneCity);
