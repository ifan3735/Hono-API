"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const auth_controller_1 = require("./auth.controller");
const hono_1 = require("hono");
const zod_validator_1 = require("@hono/zod-validator");
const validator_1 = require("../validator");
exports.authRouter = new hono_1.Hono();
exports.authRouter.post('/sign', (0, zod_validator_1.zValidator)('json', validator_1.registerUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), auth_controller_1.authenticateUser);
exports.authRouter.post('/login', (0, zod_validator_1.zValidator)('json', validator_1.loginUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400);
    }
}), auth_controller_1.signup);
exports.authRouter.get;
