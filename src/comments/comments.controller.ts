import { Context } from "hono";
import { commentsService, getCommentService, createComment, updateComment, deleteComment } from "./comments.service";

const listComments = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await commentsService(limit);
        if (data == null || data.length == 0) {
            return c.text("Comment not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getComment = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const comment = await getCommentService(id);
    if (comment == undefined) {
        return c.text("Comment not found", 404);
    }
    return c.json(comment, 200);
}

export{
    listComments,
        getComment
}

// create a new comment in the database
export const createOneComment = async (c: Context) => {
    try {
        const comment = await c.req.json();
       await createComment(comment);
       return c.text("Comment created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a comment in the database
export const updateOneComment = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const comment = await c.req.json();
        await updateComment(id, comment);
        return c.text("Comment updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a comment from the database
export const deleteOneComment = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        await deleteComment(id);
        return c.text("Comment deleted successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}