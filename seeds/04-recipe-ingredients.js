exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, ingredient_quantity: 2 },
    { recipe_id: 1, ingredient_id: 2, ingredient_quantity: 2 },
    { recipe_id: 2, ingredient_id: 1, ingredient_quantity: 1 },
    { recipe_id: 2, ingredient_id: 3, ingredient_quantity: 1 },
    { recipe_id: 2, ingredient_id: 4, ingredient_quantity: 3 },
  ]);
};
