"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneState = exports.updateOneState = exports.createOneState = exports.getState = exports.listStates = void 0;
const state_service_1 = require("./state.service");
const listStates = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, state_service_1.statesService)(limit);
        if (data == null || data.length == 0) {
            return c.text("State not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listStates = listStates;
const getState = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const state = await (0, state_service_1.getStateService)(id);
    if (state == undefined) {
        return c.text("State not found", 404);
    }
    return c.json(state, 200);
};
exports.getState = getState;
// create a new state in the database
const createOneState = async (c) => {
    try {
        const state = await c.req.json();
        await (0, state_service_1.createState)(state);
        return c.text("State created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneState = createOneState;
// update a state in the database
const updateOneState = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const state = await c.req.json();
        await (0, state_service_1.updateState)(id, state);
        return c.text("State updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneState = updateOneState;
// delete a state from the database
const deleteOneState = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const response = await (0, state_service_1.deleteState)(id);
        return c.json({ msg: response }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneState = deleteOneState;
