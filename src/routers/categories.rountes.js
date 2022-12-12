import { Router } from 'express'
import { createCategoryController, 
        deletCategoryByIdController, 
        getCategoryByIdController, 
        getCategoryController, 
        updateCategoryByIdController } 
from '../controllers/categories.controller';

import { ensureCategoryNoexists, 
        ensureCategoriesExistsMiddleware, 
        ensureCategoriessMiddleware } 
from '../middlewares/ensure.categories.middleware';

import { createCategoriestSchema } from '../schemas/categories.schemas'


const  categoriesRoutes = Router()

categoriesRoutes.post('',ensureCategoriessMiddleware(createCategoriestSchema),ensureCategoriesExistsMiddleware, createCategoryController)
categoriesRoutes.get('', getCategoryController)
categoriesRoutes.get('/:id',ensureCategoryNoexists, getCategoryByIdController)
categoriesRoutes.patch('/:id',ensureCategoryNoexists, updateCategoryByIdController)
categoriesRoutes.delete('/:id',ensureCategoryNoexists, deletCategoryByIdController)

export default categoriesRoutes