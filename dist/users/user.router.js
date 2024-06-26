"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const hono_1 = require("hono");
const user_controller_1 = require("./user.controller");
exports.userRouter = new hono_1.Hono();
const auth_1 = require("../middleware/auth");
//get all users      api/users
exports.userRouter.get("/users", auth_1.adminRoleAuth, user_controller_1.listUsers);
//get a single user    api/users/1
exports.userRouter.get("/users/:id", auth_1.bothRoleAuth, user_controller_1.getUser);
exports.userRouter.post("/users", auth_1.adminRoleAuth, user_controller_1.createOneUser);
exports.userRouter.put("/users/:id", auth_1.adminRoleAuth, user_controller_1.createOneUser);
exports.userRouter.delete("/users/:id", auth_1.bothRoleAuth, user_controller_1.deleteUser);
