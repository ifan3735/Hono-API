"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneCity = exports.updateOneCity = exports.createOneCity = exports.getCity = exports.listCities = void 0;
const cities_service_1 = require("./cities.service");
const listCities = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, cities_service_1.citiesService)(limit);
        if (data == null || data.length == 0) {
            return c.text("City not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listCities = listCities;
const getCity = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const city = await (0, cities_service_1.getCityService)(id);
    if (city == undefined) {
        return c.text("City not found", 404);
    }
    return c.json(city, 200);
};
exports.getCity = getCity;
// create a new city in the database
const createOneCity = async (c) => {
    try {
        const city = await c.req.json();
        await (0, cities_service_1.createCity)(city);
        return c.text("city created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneCity = createOneCity;
// update a city in the database
const updateOneCity = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const city = await c.req.json();
        await (0, cities_service_1.updateCity)(id, city);
        return c.text("City updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneCity = updateOneCity;
// delete a city from the database
const deleteOneCity = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const response = await (0, cities_service_1.deleteCity)(id);
        return c.json({ msg: response }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneCity = deleteOneCity;
