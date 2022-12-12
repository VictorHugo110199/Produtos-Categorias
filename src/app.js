import "express-async-errors"
import express from "express"
import categoriesRoutes from './routers/categories.rountes'
import productsRoutes from "./routers/products.rountes"
import { errorHandler } from "./errors"

const app = express()

app.use(express.json())

app.use('/categories', categoriesRoutes)
app.use('/products', productsRoutes)

app.use(errorHandler)
export default app
