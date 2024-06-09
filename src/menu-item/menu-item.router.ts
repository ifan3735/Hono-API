import { Hono } from "hono";
import { listMenuItems, getMenuItem, createOneMenuItem, updateOneMenuItem, deleteOneMenuItem} from "./menu-item.controller"
export const menuItemRouter = new Hono();

//get all menu items      api/menu-items
menuItemRouter.get("/menu-Items", listMenuItems);

//get a single menu item    api/menu-items/1
menuItemRouter.get("/menu-items/:id", getMenuItem)

menuItemRouter.post("/menu-items", createOneMenuItem)

menuItemRouter.put("/menu-items/:id", updateOneMenuItem)

menuItemRouter.delete("/menu-items/:id", deleteOneMenuItem)