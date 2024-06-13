"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteState = exports.updateState = exports.createState = exports.getStateService = exports.statesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../drizzle/db"));
const schema_1 = require("../drizzle/schema");
const statesService = async (limit) => {
    if (limit) {
        return await db_1.default.query.stateTable.findMany({
            limit: limit,
        });
    }
    return await db_1.default.query.stateTable.findMany();
};
exports.statesService = statesService;
const getStateService = async (id) => {
    return await db_1.default.query.stateTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.stateTable.id, id)
    });
};
exports.getStateService = getStateService;
// create a new state in the database
const createState = async (state) => {
    await db_1.default.insert(schema_1.stateTable).values(state);
    return 'State created successfully';
};
exports.createState = createState;
// update a state in the database
const updateState = async (id, state) => {
    await db_1.default.update(schema_1.stateTable).set(state).where((0, drizzle_orm_1.eq)(schema_1.stateTable.id, id));
    return 'State updated successfully';
};
exports.updateState = updateState;
// delete a state from the database
const deleteState = async (id) => {
    await db_1.default.delete(schema_1.stateTable).where((0, drizzle_orm_1.eq)(schema_1.stateTable.id, id));
    return 'State deleted successfully';
};
exports.deleteState = deleteState;
