import { Hono } from "hono";
import { listDrivers, getDriver, createOneDriver, updateOneDriver, deleteOneDriver } from "./driver.controller";
export const driverRouter = new Hono();

// get all drivers api/drivers
driverRouter.get('/drivers', listDrivers);

// get a single driver api/drivers/1
driverRouter.get('/drivers/:id', getDriver);

// create a driver api/drivers
 driverRouter.post('/drivers', createOneDriver);

// update a driver api/drivers/1
 driverRouter.put('/drivers/:id', updateOneDriver);

// delete a driver api/drivers/1
    driverRouter.delete('/drivers/:id', deleteOneDriver);