"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItemRouter = void 0;
const hono_1 = require("hono");
const menu_item_controller_1 = require("./menu-item.controller");
exports.menuItemRouter = new hono_1.Hono();
//get all menu items      api/menu-items
exports.menuItemRouter.get("/menu-Items", menu_item_controller_1.listMenuItems);
//get a single menu item    api/menu-items/1
exports.menuItemRouter.get("/menu-items/:id", menu_item_controller_1.getMenuItem);
exports.menuItemRouter.post("/menu-items", menu_item_controller_1.createOneMenuItem);
exports.menuItemRouter.put("/menu-items/:id", menu_item_controller_1.updateOneMenuItem);
exports.menuItemRouter.delete("/menu-items/:id", menu_item_controller_1.deleteOneMenuItem);
