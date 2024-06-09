import { Hono } from "hono";
import { listOrdersStatus, getOrdersStatus, createOneOrdersStatus, updateOneOrdersStatus, deleteOneOrdersStatus} from "./orders_status.controller"

export const ordersStatusRouter = new Hono();

//get all orders_status      api/orders_status
ordersStatusRouter.get("/orders_status", listOrdersStatus);

//get a single orders_status    api/orders_status/1
ordersStatusRouter.get("/orders_status/:id", getOrdersStatus)

ordersStatusRouter.post("/orders_status", createOneOrdersStatus)

ordersStatusRouter.put("/orders_status/:id", updateOneOrdersStatus)

ordersStatusRouter.delete("/orders_status/:id", deleteOneOrdersStatus)