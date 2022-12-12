import { Router } from 'express';
import { createProductsController, 
        deletProductsByIdController, 
        getProductsAndCategoryByIdController, 
        getProductsByIdController, 
        getProductsController, 
        updateProductsByIdController } 
from '../controllers/products.controller';

import { ensureProductsMiddleware, ensureProductNoexists } from '../middlewares/ensure.products.middlewares';
import { createProductSchema } from '../schemas/products.schemas';

const productsRoutes = Router()

productsRoutes.post('',ensureProductsMiddleware(createProductSchema), createProductsController)
productsRoutes.get('', getProductsController)
productsRoutes.get('/:id',ensureProductNoexists, getProductsByIdController)
productsRoutes.patch('/:id',ensureProductNoexists, updateProductsByIdController)
productsRoutes.delete('/:id',ensureProductNoexists, deletProductsByIdController)
productsRoutes.get('/category/:id', getProductsAndCategoryByIdController)

export default productsRoutes