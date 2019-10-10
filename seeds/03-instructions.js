exports.seed = function(knex) {
  return knex('instructions').insert([
    { step_number: 1, instruction: 'Sautee eggs and tomatoes', recipe_id: 1 },
    { step_number: 2, instruction: 'Put into your mouth hole', recipe_id: 1 },
    {
      step_number: 1,
      instruction: 'Follow the instructions on the ramen package',
      recipe_id: 2,
    },
    { step_number: 2, instruction: 'Consume', recipe_id: 2 },
  ]);
};
