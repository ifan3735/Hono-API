"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRouter = void 0;
const hono_1 = require("hono");
const orders_controller_1 = require("./orders.controller");
exports.orderRouter = new hono_1.Hono();
// get all orders      api/orders
exports.orderRouter.get('/orders', orders_controller_1.listOrders);
// get a single order    api/orders/1
exports.orderRouter.get('/orders/:id', orders_controller_1.getOrder);
exports.orderRouter.post('/orders', orders_controller_1.createOneOrder);
exports.orderRouter.put('/orders/:id', orders_controller_1.updateOneOrder);
exports.orderRouter.delete('/orders/:id', orders_controller_1.deleteOneOrder);
