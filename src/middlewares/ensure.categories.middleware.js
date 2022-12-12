import { AppError } from "../errors";
import database from "../database";

export const ensureCategoriessMiddleware =
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

export const ensureCategoriesExistsMiddleware = async (req, res, next) => {
    const queryResponse = await database.query(`
        SELECT * FROM categories WHERE name ILIKE $1
    `, [req.body.name])
    const category = queryResponse.rows[0]
    if(category) {
        throw new AppError("Category Already Exist!", 400)
    }
    next()
}

export const categoryNoexistent = async (req, res, next) => {
    try {
      const queryResponse = await database.query(
        `
          SELECT * FROM categories WHERE categories.id = $1;
        `,
        [req.params.id]
      );
      const category = queryResponse.rows;
      if (category.length === 0) {
        throw new AppError("Category not found!", 404)
      }
    } catch (error) {
      throw new AppError("Category not found!", 404)
    }
    next();
};