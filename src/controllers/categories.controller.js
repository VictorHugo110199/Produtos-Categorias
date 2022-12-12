import { createCategoryService, 
        deletCategoryByIdService, 
        getCategoryByIdService, 
        getCategoryService, 
        updateCategoryByIdService } 
from "../services/categories.service";


export const createCategoryController = async (req, res) => { 
    const [status, data] = await createCategoryService(req.body)
    return res.status(status).json(data) ;
};

export const getCategoryController = async (req, res) => {
  const [status, data] = await getCategoryService(req.query.module)
  return res.status(status).json(data)
};

export const getCategoryByIdController = async (req, res) => {
  const [status, data] = await getCategoryByIdService(req.params.id)
  return res.status(status).json(data)
};

export const updateCategoryByIdController =  async (req, res) => {
  const id = req.params.id
  const [status, data] = await updateCategoryByIdService(req.body, id)
  return res.status(status).json(data)
};

export const deletCategoryByIdController = async (req, res) => {
  const [status, data] = await deletCategoryByIdService(req.params.id)
  return res.status(status).json(data)
};