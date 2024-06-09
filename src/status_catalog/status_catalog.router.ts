import { Hono } from "hono";
import { listStatusCatalogs, getStatusCatalog, createOneStatusCatalog, updateOneStatusCatalog, deleteOneStatusCatalog} from "./status_catalog.controller"

export const statusCatalogRouter = new Hono();

//get all status_catalogs      api/status_catalogs
statusCatalogRouter.get("/status_catalogs", listStatusCatalogs);

//get a single status_catalog    api/status_catalogs/1
statusCatalogRouter.get("/status_catalogs/:id", getStatusCatalog)

statusCatalogRouter.post("/status_catalogs", createOneStatusCatalog)

statusCatalogRouter.put("/status_catalogs/:id", updateOneStatusCatalog)

statusCatalogRouter.delete("/status_catalogs/:id", deleteOneStatusCatalog)
