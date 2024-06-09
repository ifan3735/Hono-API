import { Hono } from "hono";
import { listAddresses, getAddress, createOneAddress, updateOneAddress, deleteOneAddress } from "./address.controller";
export const addressRouter = new Hono();

//get all addresses      api/addresses
addressRouter.get("/addresses", listAddresses);

//get a single address    api/addresses/1
addressRouter.get("/addresses/:id", getAddress)

addressRouter.post("/addresses", createOneAddress)

addressRouter.put("/addresses/:id", updateOneAddress)

addressRouter.delete("/addresses/:id", deleteOneAddress)

// Path: src/address/address.controller.ts