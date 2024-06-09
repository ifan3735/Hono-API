import { Hono } from "hono";
import { listComments, getComment, createOneComment, updateOneComment, deleteOneComment} from "./comments.controller"

export const commentRouter = new Hono();

//get all comments      api/comments
commentRouter.get("/comments", listComments);

//get a single comment    api/comments/1
commentRouter.get("/comments/:id", getComment)

commentRouter.post("/comments", createOneComment)

commentRouter.put("/comments/:id", updateOneComment)

commentRouter.delete("/comments/:id", deleteOneComment)