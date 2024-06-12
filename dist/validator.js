"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.registerUserSchema = void 0;
const zod_1 = require("zod");
exports.registerUserSchema = zod_1.z.object({
    user_id: zod_1.z.number(),
    username: zod_1.z.string(),
    role: zod_1.z.string(),
    password: zod_1.z.string()
});
exports.loginUserSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
