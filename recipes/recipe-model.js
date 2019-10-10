const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('ingredients as i')
    .join('recipe_ingredients as ri', 'ri.ingredient_id', 'i.id')
    .select('i.name', 'ingredient_quantity as quantity')
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .select('name', 'step_number', 'instruction')
    .where({ recipe_id })
    .orderBy('step_number');
}
