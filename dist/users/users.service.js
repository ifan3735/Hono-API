"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneUser = exports.updateUser = exports.createUser = exports.getUserService = exports.usersService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const usersService = async (limit) => {
    if (limit) {
        return await db_1.db.query.usersTable.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.usersTable.findMany();
};
exports.usersService = usersService;
const getUserService = async (id) => {
    return await db_1.db.query.usersTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.usersTable.id, id),
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
    });
};
exports.getUserService = getUserService;
// create a new user in the database
const createUser = async (user) => {
    await db_1.db.insert(schema_1.usersTable).values(user);
    return 'User created successfully';
};
exports.createUser = createUser;
// update a user in the database
const updateUser = async (id, user) => {
    await db_1.db.update(schema_1.usersTable).set(user).where((0, drizzle_orm_1.eq)(schema_1.usersTable.id, id));
    return 'User updated successfully';
};
exports.updateUser = updateUser;
// delete a user from the database
const deleteOneUser = async (id) => {
    await db_1.db.delete(schema_1.usersTable).where((0, drizzle_orm_1.eq)(schema_1.usersTable.id, id));
    return 'User deleted successfully';
};
exports.deleteOneUser = deleteOneUser;
