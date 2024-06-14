"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
const user_router_1 = require("./users/user.router");
const cities_router_1 = require("./cities/cities.router");
const state_router_1 = require("./states/state.router");
const driver_router_1 = require("./drivers/driver.router");
const restaurant_router_1 = require("./restaurant/restaurant.router");
const category_router_1 = require("./category/category.router");
const menu_item_router_1 = require("./menu-item/menu-item.router");
const address_router_1 = require("./address/address.router");
const restaurantOwner_router_1 = require("./restaurantOwner/restaurantOwner.router");
const orders_router_1 = require("./orders/orders.router");
const comments_router_1 = require("./comments/comments.router");
const status_catalog_router_1 = require("./status_catalog/status_catalog.router");
const orders_status_router_1 = require("./orders_status/orders_status.router");
const order_menu_item_router_1 = require("./order_menu_item/order_menu_item.router");
const auth_router_1 = require("./auth/auth.router");
const app = new hono_1.Hono();
app.get('/', (c) => {
    return c.text('Hello Hono!');
});
app.route('/', user_router_1.userRouter);
app.route('/', cities_router_1.cityRouter);
app.route('/', state_router_1.stateRouter);
app.route('/', driver_router_1.driverRouter);
app.route('/', restaurant_router_1.restaurantRouter);
app.route('/', category_router_1.categoryRouter);
app.route('/', menu_item_router_1.menuItemRouter);
app.route('/', address_router_1.addressRouter);
app.route('/', restaurantOwner_router_1.restaurantOwnerRouter);
app.route('/', orders_router_1.orderRouter);
app.route('/', comments_router_1.commentRouter);
app.route('/', status_catalog_router_1.statusCatalogRouter);
app.route('/', orders_status_router_1.ordersStatusRouter);
app.route('/', order_menu_item_router_1.orderMenuItemRouter);
app.route('/', auth_router_1.authRouter);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: Number(process.env.PORT)
});
console.log(`Server is running on port ${process.env.PORT}`);
