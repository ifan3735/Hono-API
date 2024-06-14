import { eq } from "drizzle-orm";
import {db} from "../drizzle/db";
import { AddressSelect, addressTable } from "../drizzle/schema";

const addressesService = async (limit?: number)=> {
    if (limit) {
        return await db.query.addressTable.findMany({
            limit: limit,
        });
    }
    return await db.query.addressTable.findMany();
}

const getAddressService = async (id: number)=> {
    return await db.query.addressTable.findFirst({
        where: eq(addressTable.id, id)
    })
}

export{
    addressesService,
    getAddressService
}

// create a new address in the database
export const createAddress = async (address: AddressSelect)=> {
   await db.insert(addressTable).values(address)
   return 'Address created successfully';
}

// update an address in the database
export const updateAddress = async (id: number, address: AddressSelect)=> {
    await db.update(addressTable).set(address).where(eq(addressTable.id, id))
    return 'Address updated successfully';
}

// delete an address from the database
export const deleteAddress = async (id: number)=> {
    await db.delete(addressTable).where(eq(addressTable.id, id))
    return 'Address deleted successfully';
}