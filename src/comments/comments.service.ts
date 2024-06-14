import { eq } from "drizzle-orm";
import {db}  from "../drizzle/db";
import { CommentsSelect, commentsTable } from "../drizzle/schema";

const commentsService = async (limit?: number)=> {
    if (limit) {
        return await db.query.commentsTable.findMany({
            limit: limit,
        });
    }
    return await db.query.commentsTable.findMany();
}

const getCommentService = async (id: number)=> {
    return await db.query.commentsTable.findFirst({
        where: eq(commentsTable.id, id)
    })
}

export{
    commentsService,
    getCommentService
}

// create a new comment in the database
export const createComment = async (comment: CommentsSelect)=> {
   await db.insert(commentsTable).values(comment)
   return 'Comment created successfully';
}

// update a comment in the database
export const updateComment = async (id: number, comment: any)=> {
    await db.update(commentsTable).set(comment).where(eq(commentsTable.id, id))
    return 'Comment updated successfully';
}

// delete a comment from the database
export const deleteComment = async (id: number)=> {
    await db.delete(commentsTable).where(eq(commentsTable.id, id))
    return 'Comment deleted successfully';
}