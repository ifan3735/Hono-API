"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneComment = exports.updateOneComment = exports.createOneComment = exports.getComment = exports.listComments = void 0;
const comments_service_1 = require("./comments.service");
const listComments = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, comments_service_1.commentsService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Comment not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listComments = listComments;
const getComment = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const comment = await (0, comments_service_1.getCommentService)(id);
    if (comment == undefined) {
        return c.text("Comment not found", 404);
    }
    return c.json(comment, 200);
};
exports.getComment = getComment;
// create a new comment in the database
const createOneComment = async (c) => {
    try {
        const comment = await c.req.json();
        await (0, comments_service_1.createComment)(comment);
        return c.text("Comment created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneComment = createOneComment;
// update a comment in the database
const updateOneComment = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const comment = await c.req.json();
        await (0, comments_service_1.updateComment)(id, comment);
        return c.text("Comment updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneComment = updateOneComment;
// delete a comment from the database
const deleteOneComment = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        await (0, comments_service_1.deleteComment)(id);
        return c.text("Comment deleted successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneComment = deleteOneComment;
