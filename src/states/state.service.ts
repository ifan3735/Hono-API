import { eq } from "drizzle-orm";
import {db}  from "../drizzle/db";
import { stateTable, StateSelect} from "../drizzle/schema";

const statesService = async (limit?: number)=> {
    if (limit) {
        return await db.query.stateTable.findMany({
            limit: limit,
        });
    }
    return await db.query.stateTable.findMany();
}

const getStateService = async (id: number)=> {
    return await db.query.stateTable.findFirst({
        where: eq(stateTable.id, id)
    })
}

export{
    statesService,
    getStateService
}

// create a new state in the database
export const createState = async (state: StateSelect)=> {
   await db.insert(stateTable).values(state)
   return 'State created successfully';
}

// update a state in the database
export const updateState = async (id: number, state: StateSelect)=> {
    await db.update(stateTable).set(state).where(eq(stateTable.id, id))
    return 'State updated successfully';
}

// delete a state from the database
export const deleteState = async (id: number)=> {
    await db.delete(stateTable).where(eq(stateTable.id, id))
    return 'State deleted successfully';
}