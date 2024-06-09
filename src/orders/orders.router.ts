import { Hono } from 'hono';
import { listOrders, getOrder, createOneOrder, updateOneOrder, deleteOneOrder } from './orders.controller';

export const orderRouter = new Hono();

// get all orders      api/orders
orderRouter.get('/orders', listOrders);

// get a single order    api/orders/1
orderRouter.get('/orders/:id', getOrder);

orderRouter.post('/orders', createOneOrder);

orderRouter.put('/orders/:id', updateOneOrder);

orderRouter.delete('/orders/:id', deleteOneOrder);