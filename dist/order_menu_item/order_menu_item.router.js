"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderMenuItemRouter = void 0;
const hono_1 = require("hono");
const order_menu_item_controller_1 = require("./order_menu_item.controller");
exports.orderMenuItemRouter = new hono_1.Hono();
//get all orderMenuItems      api/order_menu_items
exports.orderMenuItemRouter.get("/order_menu_items", order_menu_item_controller_1.listOrderMenuItems);
//get a single orderMenuItem    api/order_menu_items/1
exports.orderMenuItemRouter.get("/order_menu_items/:id", order_menu_item_controller_1.getOrderMenuItem);
exports.orderMenuItemRouter.post("/order_menu_items", order_menu_item_controller_1.createOneOrderMenuItem);
exports.orderMenuItemRouter.put("/order_menu_items/:id", order_menu_item_controller_1.updateOneOrderMenuItem);
exports.orderMenuItemRouter.delete("/order_menu_items/:id", order_menu_item_controller_1.deleteOneOrderMenuItem);
