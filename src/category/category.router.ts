import { Hono } from 'hono';
import { listCategories, getCategory, createOneCategory, updateOneCategory, deleteOneCategory } from './category.controller';
export const categoryRouter = new Hono();

//get all categories      api/categories
categoryRouter.get('/categories', listCategories);

//get a single category    api/categories/1
categoryRouter.get('/categories/:id', getCategory)

categoryRouter.post('/categories', createOneCategory)

categoryRouter.put('/categories/:id', updateOneCategory)

categoryRouter.delete('/categories/:id', deleteOneCategory)