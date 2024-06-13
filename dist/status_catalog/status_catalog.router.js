"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCatalogRouter = void 0;
const hono_1 = require("hono");
const status_catalog_controller_1 = require("./status_catalog.controller");
exports.statusCatalogRouter = new hono_1.Hono();
//get all status_catalogs      api/status_catalogs
exports.statusCatalogRouter.get("/status_catalogs", status_catalog_controller_1.listStatusCatalogs);
//get a single status_catalog    api/status_catalogs/1
exports.statusCatalogRouter.get("/status_catalogs/:id", status_catalog_controller_1.getStatusCatalog);
exports.statusCatalogRouter.post("/status_catalogs", status_catalog_controller_1.createOneStatusCatalog);
exports.statusCatalogRouter.put("/status_catalogs/:id", status_catalog_controller_1.updateOneStatusCatalog);
exports.statusCatalogRouter.delete("/status_catalogs/:id", status_catalog_controller_1.deleteOneStatusCatalog);
