"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateRouter = void 0;
const hono_1 = require("hono");
const state_controller_1 = require("./state.controller");
exports.stateRouter = new hono_1.Hono();
// get all states api/states
exports.stateRouter.get('/states', state_controller_1.listStates);
// get a single state api/states/1
exports.stateRouter.get('/states/:id', state_controller_1.getState);
// create a state api/states
exports.stateRouter.post('/states', state_controller_1.createOneState);
// update a state api/states/1
exports.stateRouter.put('/states/:id', state_controller_1.updateOneState);
// delete a state api/states/1
exports.stateRouter.delete('/states/:id', state_controller_1.deleteOneState);
