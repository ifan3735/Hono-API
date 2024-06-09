import { Hono } from "hono";
import { listOrderMenuItems, getOrderMenuItem, createOneOrderMenuItem, updateOneOrderMenuItem, deleteOneOrderMenuItem} from "./order_menu_item.controller"

export const orderMenuItemRouter = new Hono();

//get all orderMenuItems      api/order_menu_items
orderMenuItemRouter.get("/order_menu_items", listOrderMenuItems);

//get a single orderMenuItem    api/order_menu_items/1
orderMenuItemRouter.get("/order_menu_items/:id", getOrderMenuItem)

orderMenuItemRouter.post("/order_menu_items", createOneOrderMenuItem)

orderMenuItemRouter.put("/order_menu_items/:id", updateOneOrderMenuItem)

orderMenuItemRouter.delete("/order_menu_items/:id", deleteOneOrderMenuItem)