import database from "../database";
import { AppError } from "../errors";


export const ensureProductsMiddleware =
  (schema) => async (req, res, next) => {
    try {
      const validated = await schema.validate(req.body, {
        stripUnknow: true,
        abortEarly: false,
      });
      req.validatedRequest = validated;
      next();
    } catch (error) {
      return res.status(400).json({ message: error.errors });
    }
};

export const productNoexistent = async (req, res, next) => {
  try {
    const queryResponse = await database.query(
      `
        SELECT * FROM products WHERE products.id = $1;
      `,
      [req.params.id]
    );
    const product = queryResponse.rows;
    if (product.length === 0) {
      throw new AppError("Product not found!", 404)
    }
  } catch (error) {
    throw new AppError("Product not found!", 404)
  }
  next();
};