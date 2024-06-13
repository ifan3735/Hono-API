"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatusCatalog = exports.updateStatusCatalog = exports.createStatusCatalog = exports.getStatusCatalogService = exports.statusCatalogService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const statusCatalogService = async (limit) => {
    if (limit) {
        return await db_1.default.query.statusCatalogTable.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.statusCatalogTable.findMany();
};
exports.statusCatalogService = statusCatalogService;
const getStatusCatalogService = async (id) => {
    return await db_1.default.query.statusCatalogTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.statusCatalogTable.id, id)
    });
};
exports.getStatusCatalogService = getStatusCatalogService;
// create a new statusCatalog in the database
const createStatusCatalog = async (statusCatalog) => {
    await db_1.default.insert(schema_1.statusCatalogTable).values(statusCatalog);
    return 'StatusCatalog created successfully';
};
exports.createStatusCatalog = createStatusCatalog;
// update a statusCatalog in the database
const updateStatusCatalog = async (id, statusCatalog) => {
    await db_1.default.update(schema_1.statusCatalogTable).set(statusCatalog).where((0, drizzle_orm_1.eq)(schema_1.statusCatalogTable.id, id));
    return 'StatusCatalog updated successfully';
};
exports.updateStatusCatalog = updateStatusCatalog;
// delete a statusCatalog from the database
const deleteStatusCatalog = async (id) => {
    await db_1.default.delete(schema_1.statusCatalogTable).where((0, drizzle_orm_1.eq)(schema_1.statusCatalogTable.id, id));
    return 'StatusCatalog deleted successfully';
};
exports.deleteStatusCatalog = deleteStatusCatalog;
