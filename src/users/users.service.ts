import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { UsersSelect, usersTable } from "../drizzle/schema";


const usersService = async (limit?: number)=> {
    if (limit) {
        return await db.query.usersTable.findMany({
            limit: limit,
        });
    }
    return await db.query.usersTable.findMany();
}

const getUserService = async (id: number)=> {
    return await db.query.usersTable.findFirst({
        where: eq(usersTable.id, id), 
        with: {
            addresses: {
                columns: {
                    street_address_1: true,
                    street_address_2: true,
                    zip_code: true,
                    city_id: true,
                }
            },
            drivers: {
                columns: {
                    car_make: true,
                    car_model: true,
                    car_year: true,
                    online: true
            }
            },
            orders: {
                columns: {
                    restaurant_id: true,
                    estimated_delivery_time: true,
                    price: true,
                    discount: true,
                    final_price: true
                }
            },
            comments: {
                columns: {
                    comment_text: true
                }
            },
           restaurantOwners: {
            columns: {
                restaurant_id: true
           }
            }
        }
            
        })
}


export{
    usersService,
    getUserService
}

// create a new user in the database
export const createUser = async (user: UsersSelect)=> {
   await db.insert(usersTable).values(user)
   return 'User created successfully';
}

// update a user in the database
export const updateUser = async (id: number, user: UsersSelect)=> {
    await db.update(usersTable).set(user).where(eq(usersTable.id, id))
    return 'User updated successfully';
}

// delete a user from the database
export const deleteOneUser = async (id: number) => {
    await db.delete(usersTable).where(eq(usersTable.id, id))
    return 'User deleted successfully';
}
