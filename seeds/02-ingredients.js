exports.seed = function(knex) {
  return knex('ingredients').insert([
    { name: 'eggs' },
    { name: 'tomatoes' },
    { name: 'packages of ramen' },
    { name: 'shiitake mushrooms' },
  ]);
};
