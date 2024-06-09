import { Context } from "hono";
import { addressesService, getAddressService, createAddress, updateAddress, deleteAddress} from "./address.service"

const listAddresses = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await addressesService(limit);
        if (data == null || data.length == 0) {
            return c.text("Address not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getAddress = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const address = await getAddressService(id);
    if (address == undefined) {
        return c.text("Address not found", 404);
    }
    return c.json(address, 200);
}

export{
    listAddresses,
        getAddress
}

// create a new address in the database
export const createOneAddress = async (c: Context) => {
    try {
        const address = await c.req.json();
       await createAddress(address);
       return c.text("Address created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a address in the database
export const updateOneAddress = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const address = await c.req.json();
        await updateAddress(id, address);
        return c.text("Address updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a address from the database
export const deleteOneAddress = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        await deleteAddress(id);
        return c.text("Address deleted successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}