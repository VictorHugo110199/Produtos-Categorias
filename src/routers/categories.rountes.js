import { Router } from 'express'
import { createCategoryController, 
        deletCategoryByIdController, 
        getCategoryByIdController, 
        getCategoryController, 
        updateCategoryByIdController } 
from '../controllers/categories.controller'
import { categoryNoexistent, ensureCategoriesExistsMiddleware, ensureCategoriessMiddleware } from '../middlewares/ensure.categories.middleware'
import { createCategoriestSchema } from '../schemas/categories.schemas'


const  categoriesRoutes = Router()

categoriesRoutes.post('',ensureCategoriessMiddleware(createCategoriestSchema),ensureCategoriesExistsMiddleware, createCategoryController)
categoriesRoutes.get('', getCategoryController)
categoriesRoutes.get('/:id',categoryNoexistent, getCategoryByIdController)
categoriesRoutes.patch('/:id',categoryNoexistent, updateCategoryByIdController)
categoriesRoutes.delete('/:id',categoryNoexistent, deletCategoryByIdController)

export default categoriesRoutes