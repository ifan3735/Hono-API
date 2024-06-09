import { Context } from "hono";
import { categoriesService, getCategoryService, createCategory, updateCategory, deleteCategory } from "./category.service";

const listCategories = async (c: Context) => {
    try {
        const limit = Number(c.req.query('limit'))

        const data = await categoriesService(limit);
        if (data == null || data.length == 0) {
            return c.text("Category not found", 404)
        }
        return c.json(data, 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

const getCategory = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) return c.text("Invalid ID", 400);

    const category = await getCategoryService(id);
    if (category == undefined) {
        return c.text("Category not found", 404);
    }
    return c.json(category, 200);
}

export{
    listCategories,
        getCategory
}

// create a new category in the database
export const createOneCategory = async (c: Context) => {
    try {
        const category = await c.req.json();
       await createCategory(category);
       return c.text("Category created successfully", 201);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// update a category in the database
export const updateOneCategory = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        const category = await c.req.json();
        await updateCategory(id, category);
        return c.text("Category updated successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}

// delete a category from the database
export const deleteOneCategory = async (c: Context) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id)) return c.text("Invalid ID", 400);

        await deleteCategory(id);
        return c.text("Category deleted successfully", 200);
    } catch (error: any) {
        return c.json({ error: error?.message }, 400)
    }
}