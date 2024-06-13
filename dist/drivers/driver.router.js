"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverRouter = void 0;
const hono_1 = require("hono");
const driver_controller_1 = require("./driver.controller");
exports.driverRouter = new hono_1.Hono();
// get all drivers api/drivers
exports.driverRouter.get('/drivers', driver_controller_1.listDrivers);
// get a single driver api/drivers/1
exports.driverRouter.get('/drivers/:id', driver_controller_1.getDriver);
// create a driver api/drivers
exports.driverRouter.post('/drivers', driver_controller_1.createOneDriver);
// update a driver api/drivers/1
exports.driverRouter.put('/drivers/:id', driver_controller_1.updateOneDriver);
// delete a driver api/drivers/1
exports.driverRouter.delete('/drivers/:id', driver_controller_1.deleteOneDriver);
