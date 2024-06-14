import 'dotenv/config';
import { authTable } from "../drizzle/schema";
import {db} from "../drizzle/db";
import { Context } from "hono";
import { createAuthUserService, userLoginService } from "./auth.service";
import { sign } from "hono/jwt"; // Import the 'sign' function from the 'jsonwebtoken' mo
import bcrypt from "bcrypt";


export const authenticateUser = async (c: Context) => {
    try {
        const user = await c.req.json();
        const pass = user.password;
        const hashedPassword = await bcrypt.hash(pass, 10);
        user.password = hashedPassword;
        const createdUser = await createAuthUserService(user);
        if (!createdUser) return c.text("User not created", 404);
        return c.json({msg: createdUser}, 201);
    }
    catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

//login user
// authorization settings
export const signup = async(c:Context)=>{
    try{
        const user = await c.req.json();
        const userExists = await userLoginService(user);
        if(userExists === null) return c.json({error: "user does not exist"},404)

            const userMatch = await bcrypt.compare(user.password,userExists?.password as string);
            if(!userMatch) {return c.json({error: "Invalid Credentials"},401)
            }else{
                const payload = {
                    username: userExists?.username,
                    role: userExists?.role,
                    exp:Math.floor(Date.now() /1000) + (60 * 180) //expires in after 3 hours
                }
            
                let secret = process.env.JWT_SECRET as string;
                const token = await sign(payload,secret);
                let user = userExists?.user;
                let role = userExists?.role;
                return c.json({token,user: { role, ...user}},200)
            }
    }catch(error:any){
        return c.json({error:error.message},400)
}
}

