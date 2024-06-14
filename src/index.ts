import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { userRouter } from './users/user.router'
import { cityRouter } from './cities/cities.router'
import { stateRouter } from './states/state.router'
import { driverRouter } from './drivers/driver.router'
import { restaurantRouter } from './restaurant/restaurant.router'
import { categoryRouter } from './category/category.router'
import { menuItemRouter } from './menu-item/menu-item.router'
import { addressRouter } from './address/address.router'
import { restaurantOwnerRouter } from './restaurantOwner/restaurantOwner.router'
import { orderRouter } from './orders/orders.router'
import { commentRouter } from './comments/comments.router'
import { statusCatalogRouter } from './status_catalog/status_catalog.router'
import { ordersStatusRouter } from './orders_status/orders_status.router'
import { orderMenuItemRouter } from './order_menu_item/order_menu_item.router'
import { authRouter } from './auth/auth.router'


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/', userRouter)
app.route('/', cityRouter) 
app.route('/', stateRouter)
app.route('/', driverRouter)
app.route('/', restaurantRouter)
app.route('/', categoryRouter)
app.route('/', menuItemRouter)
app.route('/', addressRouter)
app.route('/', restaurantOwnerRouter)
app.route('/', orderRouter)
app.route('/', commentRouter)
app.route('/', statusCatalogRouter)
app.route('/', ordersStatusRouter)
app.route('/', orderMenuItemRouter)
app.route('/', authRouter)



serve({
  fetch: app.fetch,
  port: 8000
})

console.log(`Server is running on port ${process.env.PORT}`)
