"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCity = exports.updateCity = exports.createCity = exports.getCityService = exports.citiesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const citiesService = async (limit) => {
    if (limit) {
        return await db_1.default.query.cityTable.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.cityTable.findMany();
};
exports.citiesService = citiesService;
const getCityService = async (id) => {
    return await db_1.default.query.cityTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.cityTable.id, id)
    });
};
exports.getCityService = getCityService;
// create a new city in the database
const createCity = async (city) => {
    await db_1.default.insert(schema_1.cityTable).values(city);
    return 'City created successfully';
};
exports.createCity = createCity;
// update a city in the database
const updateCity = async (id, city) => {
    await db_1.default.update(schema_1.cityTable).set(city).where((0, drizzle_orm_1.eq)(schema_1.cityTable.id, id));
    return 'City updated successfully';
};
exports.updateCity = updateCity;
// delete a city from the database
const deleteCity = async (id) => {
    await db_1.default.delete(schema_1.cityTable).where((0, drizzle_orm_1.eq)(schema_1.cityTable.id, id));
    return 'City deleted successfully';
};
exports.deleteCity = deleteCity;
