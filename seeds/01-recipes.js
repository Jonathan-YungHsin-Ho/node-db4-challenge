exports.seed = function(knex) {
  return knex('recipes').insert([
    {
      name: 'Sauteed eggs and tomatoes',
      description: 'Yum yum in my tum tums',
    },
    { name: 'Ramen', description: `Perfect when you're funemployed!` },
  ]);
};
