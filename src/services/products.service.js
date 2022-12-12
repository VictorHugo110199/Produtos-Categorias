import database from "../database";

export const createProductsService = async (newProducts) => {
    const queryResponse = await database
      .query(
        `INSERT INTO products (name, price, category_id) VALUES ($1, $2, $3) RETURNING *;`
        ,[newProducts.name, newProducts.price, newProducts.category_id])
    return [201, queryResponse.rows[0]]
};

export const getProductsService = async () => {
  const queryResponse = await database
    .query(
      'SELECT * FROM products;'
    )
    return [200, queryResponse.rows]
}

export const getProductsByIdService = async (id) => {
  const queryResponse = await database
    .query(`
      SELECT * FROM products WHERE id = $1;
    `, [id])
  return [200, queryResponse.rows[0]]
}

export const updateProductsByIdService = async (newName, id) => {
  const queryResponse = await database
    .query(`
      UPDATE products SET name = $1 WHERE id = $2 RETURNING *;
    `, [newName.name, id])

  return [200, queryResponse.rows[0]]
}

export const deletProductsByIdService = async (id) => {
  const queryResponse = await database
    .query(`
      DELETE FROM products WHERE id = $1 RETURNING *;
    `, [id])
  return [204, queryResponse.rows[0]]
}

export const getProductsAndCategoryByIdService = async (id) => {
    const queryResponse = await database
        .query(`
            SELECT * , categories.name category
            FROM categories
            JOIN products
            ON categories.id = products.category_id
            WHERE products.category_id = $1;
        `, [id])
    return [200, queryResponse.rows]
}