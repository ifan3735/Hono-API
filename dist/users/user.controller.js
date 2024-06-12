"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateOneUser = exports.createOneUser = exports.getUser = exports.listUsers = void 0;
const users_service_1 = require("./users.service");
const bcrypt = __importStar(require("bcrypt"));
const listUsers = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, users_service_1.usersService)(limit);
        if (data == null || data.length == 0) {
            return c.text("User not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listUsers = listUsers;
const getUser = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const user = await (0, users_service_1.getUserService)(id);
    if (user == undefined) {
        return c.text("User not found", 404);
    }
    return c.json(user, 200);
};
exports.getUser = getUser;
const createOneUser = async (c) => {
    try {
        const user = await c.req.json();
        const password = user.password;
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await (0, users_service_1.createUser)(user);
        return c.text("User created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneUser = createOneUser;
const updateOneUser = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const user = await c.req.json();
        await (0, users_service_1.updateUser)(id, user);
        return c.text("User updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneUser = updateOneUser;
const deleteUser = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const response = await (0, users_service_1.deleteOneUser)(id);
        return c.json({ msg: response }, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteUser = deleteUser;
