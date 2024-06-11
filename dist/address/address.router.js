"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const hono_1 = require("hono");
const address_controller_1 = require("./address.controller");
exports.addressRouter = new hono_1.Hono();
//get all addresses      api/addresses
exports.addressRouter.get("/addresses", address_controller_1.listAddresses);
//get a single address    api/addresses/1
exports.addressRouter.get("/addresses/:id", address_controller_1.getAddress);
exports.addressRouter.post("/addresses", address_controller_1.createOneAddress);
exports.addressRouter.put("/addresses/:id", address_controller_1.updateOneAddress);
exports.addressRouter.delete("/addresses/:id", address_controller_1.deleteOneAddress);
// Path: src/address/address.controller.ts
