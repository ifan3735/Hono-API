import { Hono } from 'hono';
import { listStates, getState, createOneState, updateOneState, deleteOneState } from './state.controller';


export const stateRouter = new Hono();

// get all states api/states
stateRouter.get('/states', listStates);

// get a single state api/states/1
stateRouter.get('/states/:id', getState);

// create a state api/states
stateRouter.post('/states', createOneState);

// update a state api/states/1
stateRouter.put('/states/:id', updateOneState);

// delete a state api/states/1
stateRouter.delete('/states/:id', deleteOneState);