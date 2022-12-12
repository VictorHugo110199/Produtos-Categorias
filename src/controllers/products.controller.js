import { createProductsService, 
    deletProductsByIdService, 
    getProductsAndCategoryByIdService, 
    getProductsByIdService, 
    getProductsService, 
    updateProductsByIdService } 
from "../services/products.service";


export const createProductsController = async (req, res) => { 
    const [status, data] = await createProductsService(req.body)
    return res.status(status).json(data) ;
};

export const getProductsController = async (req, res) => {
    const [status, data] = await getProductsService(req.query.module)
    return res.status(status).json(data)
};

export const getProductsByIdController = async (req, res) => {
    const [status, data] = await getProductsByIdService(req.params.id)
    return res.status(status).json(data)
};

export const updateProductsByIdController =  async (req, res) => {
    const id = req.params.id
    const [status, data] = await updateProductsByIdService(req.body, id)
    return res.status(status).json(data)
};

export const deletProductsByIdController = async (req, res) => {
    const [status, data] = await deletProductsByIdService(req.params.id)
    return res.status(status).json(data)
};

export const getProductsAndCategoryByIdController = async (req, res) => {
    const [status, data] = await getProductsAndCategoryByIdService(req.params.id)
    console.log(status)
    return res.status(status).json(data)
};