import { Context } from "hono";
import { statesService, getStateService, createState, updateState, deleteState } from "./state.service";

const listStates = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await statesService(limit);
        if (data == null || data.length == 0) {
            return c.text("State not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getState = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const state = await getStateService(id);
    if (state == undefined) {
        return c.text("State not found", 404);
    }
    return c.json(state, 200);
}

export{
    listStates,
        getState
}

// create a new state in the database
export const createOneState = async (c: Context) => {
    try {
        const state = await c.req.json();
       await createState(state);
       return c.text("State created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a state in the database
export const updateOneState = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const state = await c.req.json();
        await updateState(id, state);
        return c.text("State updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a state from the database
export const deleteOneState = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const response = await deleteState(id);
        return c.json({msg: response}, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}