




import { Hono } from "hono";
import { listUsers, getUser, createOneUser, deleteUser} from "./user.controller"
export const userRouter = new Hono();
import { userRoleAuth, adminRoleAuth, bothRoleAuth} from "../middleware/auth";

//get all users      api/users
userRouter.get("/users", adminRoleAuth, listUsers);


//get a single user    api/users/1
userRouter.get("/users/:id", bothRoleAuth, getUser)

userRouter.post("/users", createOneUser)

userRouter.put("/users/:id", createOneUser)

userRouter.delete("/users/:id", deleteUser)