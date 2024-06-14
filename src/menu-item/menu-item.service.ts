import { eq } from "drizzle-orm";
import {db}  from "../drizzle/db";
import { MenuItemSelect, menuItemsTable } from "../drizzle/schema";

const menuItemsService = async (limit?: number)=> {
    if (limit) {
        return await db.query.menuItemsTable.findMany({
            limit: limit,
        });
    }
    return await db.query.menuItemsTable.findMany();
}

const getMenuItemService = async (id: number)=> {
    return await db.query.menuItemsTable.findFirst({
        where: eq(menuItemsTable.id, id)
    })
}

export{
    menuItemsService,
    getMenuItemService
}

// create a new menu item in the database
export const createMenuItem = async (menuItem: MenuItemSelect)=> {
   await db.insert(menuItemsTable).values(menuItem)
   return 'Menu item created successfully';
}

// update a menu item in the database
export const updateMenuItem = async (id: number, menuItem: MenuItemSelect)=> {
    await db.update(menuItemsTable).set(menuItem).where(eq(menuItemsTable.id, id))
    return 'Menu item updated successfully';
}

// delete a menu item from the database
export const deleteMenuItem = async (id: number)=> {
    await db.delete(menuItemsTable).where(eq(menuItemsTable.id, id))
    return 'Menu item deleted successfully';
}