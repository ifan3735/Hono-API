"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneStatusCatalog = exports.updateOneStatusCatalog = exports.createOneStatusCatalog = exports.getStatusCatalog = exports.listStatusCatalogs = void 0;
const status_catalog_service_1 = require("./status_catalog.service");
const listStatusCatalogs = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, status_catalog_service_1.statusCatalogService)(limit);
        if (data == null || data.length == 0) {
            return c.text("StatusCatalog not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listStatusCatalogs = listStatusCatalogs;
const getStatusCatalog = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const status_catalog = await (0, status_catalog_service_1.getStatusCatalogService)(id);
    if (status_catalog == undefined) {
        return c.text("StatusCatalog not found", 404);
    }
    return c.json(status_catalog, 200);
};
exports.getStatusCatalog = getStatusCatalog;
// create a new status_catalog in the database
const createOneStatusCatalog = async (c) => {
    try {
        const status_catalog = await c.req.json();
        await (0, status_catalog_service_1.createStatusCatalog)(status_catalog);
        return c.text("StatusCatalog created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneStatusCatalog = createOneStatusCatalog;
// update a status_catalog in the database
const updateOneStatusCatalog = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const status_catalog = await c.req.json();
        await (0, status_catalog_service_1.updateStatusCatalog)(id, status_catalog);
        return c.text("StatusCatalog updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneStatusCatalog = updateOneStatusCatalog;
// delete a status_catalog from the database
const deleteOneStatusCatalog = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        await (0, status_catalog_service_1.deleteStatusCatalog)(id);
        return c.text("StatusCatalog deleted successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneStatusCatalog = deleteOneStatusCatalog;
