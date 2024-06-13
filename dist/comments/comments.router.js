"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const hono_1 = require("hono");
const comments_controller_1 = require("./comments.controller");
exports.commentRouter = new hono_1.Hono();
//get all comments      api/comments
exports.commentRouter.get("/comments", comments_controller_1.listComments);
//get a single comment    api/comments/1
exports.commentRouter.get("/comments/:id", comments_controller_1.getComment);
exports.commentRouter.post("/comments", comments_controller_1.createOneComment);
exports.commentRouter.put("/comments/:id", comments_controller_1.updateOneComment);
exports.commentRouter.delete("/comments/:id", comments_controller_1.deleteOneComment);
