"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOneCategory = exports.updateOneCategory = exports.createOneCategory = exports.getCategory = exports.listCategories = void 0;
const category_service_1 = require("./category.service");
const listCategories = async (c) => {
    try {
        const limit = Number(c.req.query('limit'));
        const data = await (0, category_service_1.categoriesService)(limit);
        if (data == null || data.length == 0) {
            return c.text("Category not found", 404);
        }
        return c.json(data, 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.listCategories = listCategories;
const getCategory = async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id))
        return c.text("Invalid ID", 400);
    const category = await (0, category_service_1.getCategoryService)(id);
    if (category == undefined) {
        return c.text("Category not found", 404);
    }
    return c.json(category, 200);
};
exports.getCategory = getCategory;
// create a new category in the database
const createOneCategory = async (c) => {
    try {
        const category = await c.req.json();
        await (0, category_service_1.createCategory)(category);
        return c.text("Category created successfully", 201);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.createOneCategory = createOneCategory;
// update a category in the database
const updateOneCategory = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        const category = await c.req.json();
        await (0, category_service_1.updateCategory)(id, category);
        return c.text("Category updated successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.updateOneCategory = updateOneCategory;
// delete a category from the database
const deleteOneCategory = async (c) => {
    try {
        const id = parseInt(c.req.param("id"));
        if (isNaN(id))
            return c.text("Invalid ID", 400);
        await (0, category_service_1.deleteCategory)(id);
        return c.text("Category deleted successfully", 200);
    }
    catch (error) {
        return c.json({ error: error?.message }, 400);
    }
};
exports.deleteOneCategory = deleteOneCategory;
