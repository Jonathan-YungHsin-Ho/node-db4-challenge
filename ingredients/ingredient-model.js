const db = require('../data/db-config');

module.exports = {
  getRecipesByIngredient,
};

function getRecipesByIngredient(ingredient_id) {
  return db('recipes')
    .join('recipe_ingredients as ri', 'ri.recipe_id', 'recipes.id')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .select('i.name as ingredient', 'recipes.name as recipe')
    .where({ ingredient_id });
}
