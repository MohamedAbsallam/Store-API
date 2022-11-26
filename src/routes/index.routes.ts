import productRoutes from './api/products.routes'
import orderRoutes from './api/orders.routes'
import userRoutes from './api/users.routes'
import express from 'express'

// Create Instance Router
const routes = express.Router()

// Use User Routes to /api/users
routes.use('/users', userRoutes)
routes.use('/orders', orderRoutes)
routes.use('/products', productRoutes)

export default routes
