"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const hono_1 = require("hono");
const category_controller_1 = require("./category.controller");
exports.categoryRouter = new hono_1.Hono();
//get all categories      api/categories
exports.categoryRouter.get('/categories', category_controller_1.listCategories);
//get a single category    api/categories/1
exports.categoryRouter.get('/categories/:id', category_controller_1.getCategory);
exports.categoryRouter.post('/categories', category_controller_1.createOneCategory);
exports.categoryRouter.put('/categories/:id', category_controller_1.updateOneCategory);
exports.categoryRouter.delete('/categories/:id', category_controller_1.deleteOneCategory);
