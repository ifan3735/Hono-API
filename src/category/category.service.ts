import { eq } from "drizzle-orm";
import {db}  from "../drizzle/db";
import { CategorySelect, categoryTable } from "../drizzle/schema";

const categoriesService = async (limit?: number)=> {
    if (limit) {
        return await db.query.categoryTable.findMany({
            limit: limit,
        });
    }
    return await db.query.categoryTable.findMany();
}

const getCategoryService = async (id: number)=> {
    return await db.query.categoryTable.findFirst({
        where: eq(categoryTable.id, id)
    })
}

export{
    categoriesService,
    getCategoryService
}

// create a new category in the database
export const createCategory = async (category: CategorySelect)=> {
   await db.insert(categoryTable).values(category)
   return 'Category created successfully';
}

// update a category in the database
export const updateCategory = async (id: number, category: CategorySelect)=> {
    await db.update(categoryTable).set(category).where(eq(categoryTable.id, id))
    return 'Category updated successfully';
}

// delete a category from the database
export const deleteCategory = async (id: number)=> {
    await db.delete(categoryTable).where(eq(categoryTable.id, id))
    return 'Category deleted successfully';
}