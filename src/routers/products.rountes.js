import { Router } from 'express'
import { createProductsController, deletProductsByIdController, getProductsAndCategoryByIdController, getProductsByIdController, getProductsController, updateProductsByIdController } from '../controllers/products.controller'
import { ensureProductsMiddleware, productNoexistent } from '../middlewares/ensure.products.middlewares'
import { createProductSchema } from '../schemas/products.schemas'

const productsRoutes = Router()

productsRoutes.get('/categories/:id', getProductsAndCategoryByIdController)
productsRoutes.post('',ensureProductsMiddleware(createProductSchema), createProductsController)
productsRoutes.get('', getProductsController)
productsRoutes.get('/:id',productNoexistent, getProductsByIdController)
productsRoutes.patch('/:id',productNoexistent, updateProductsByIdController)
productsRoutes.delete('/:id',productNoexistent, deletProductsByIdController)

export default productsRoutes