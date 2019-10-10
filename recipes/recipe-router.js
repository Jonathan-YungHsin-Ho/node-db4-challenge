const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

// GET /api/recipes endpoint -
router.get('/', (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get recipes' });
    });
});

// GET /api/recipes/:id/shoppingList endpoint -

// GET /api/recipes/:id/instructions endpoint -

module.exports = router;
