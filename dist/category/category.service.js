"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategoryService = exports.categoriesService = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = require("../drizzle/db");
const schema_1 = require("../drizzle/schema");
const categoriesService = async (limit) => {
    if (limit) {
        return await db_1.db.query.categoryTable.findMany({
            limit: limit,
        });
    }
    return await db_1.db.query.categoryTable.findMany();
};
exports.categoriesService = categoriesService;
const getCategoryService = async (id) => {
    return await db_1.db.query.categoryTable.findFirst({
        where: (0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id)
    });
};
exports.getCategoryService = getCategoryService;
// create a new category in the database
const createCategory = async (category) => {
    await db_1.db.insert(schema_1.categoryTable).values(category);
    return 'Category created successfully';
};
exports.createCategory = createCategory;
// update a category in the database
const updateCategory = async (id, category) => {
    await db_1.db.update(schema_1.categoryTable).set(category).where((0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id));
    return 'Category updated successfully';
};
exports.updateCategory = updateCategory;
// delete a category from the database
const deleteCategory = async (id) => {
    await db_1.db.delete(schema_1.categoryTable).where((0, drizzle_orm_1.eq)(schema_1.categoryTable.id, id));
    return 'Category deleted successfully';
};
exports.deleteCategory = deleteCategory;
