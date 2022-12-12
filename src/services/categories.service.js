import database from "../database";


export const createCategoryService = async (newCategory) => {
    const queryResponse = await database
      .query(
        `INSERT INTO categories (name) VALUES ($1) RETURNING *;`
        ,[newCategory.name])
    return [201, queryResponse.rows[0]]
};

export const getCategoryService = async () => {
  const queryResponse = await database
    .query(
      'SELECT * FROM categories;'
    )
    return [200, queryResponse.rows]
}

export const getCategoryByIdService = async (id) => {
  const queryResponse = await database
    .query(`
      SELECT * FROM categories WHERE categories.id = $1;
    `, [id])
  return [200, queryResponse.rows[0]]
}

export const updateCategoryByIdService = async (newName, id) => {
  const queryResponse = await database
    .query(`
      UPDATE categories SET name = $1 WHERE id = $2 RETURNING *;
    `, [newName.name, id])

  return [200, queryResponse.rows[0]]
}

export const deletCategoryByIdService = async (id) => {
  const queryResponse = await database
    .query(`
      DELETE FROM categories WHERE id = $1 RETURNING *;
    `, [id])
  return [204, queryResponse.rows[0]]
}

