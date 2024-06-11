"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersStatusRouter = void 0;
const hono_1 = require("hono");
const orders_status_controller_1 = require("./orders_status.controller");
exports.ordersStatusRouter = new hono_1.Hono();
//get all orders_status      api/orders_status
exports.ordersStatusRouter.get("/orders_status", orders_status_controller_1.listOrdersStatus);
//get a single orders_status    api/orders_status/1
exports.ordersStatusRouter.get("/orders_status/:id", orders_status_controller_1.getOrdersStatus);
exports.ordersStatusRouter.post("/orders_status", orders_status_controller_1.createOneOrdersStatus);
exports.ordersStatusRouter.put("/orders_status/:id", orders_status_controller_1.updateOneOrdersStatus);
exports.ordersStatusRouter.delete("/orders_status/:id", orders_status_controller_1.deleteOneOrdersStatus);
