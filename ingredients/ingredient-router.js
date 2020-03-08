const express = require('express');

const Ingredients = require('./ingredient-model');

const router = express.Router();

// GET /api/ingredients/:id/recipes endpoint -
router.get('/:id/recipes', (req, res) => {
  Ingredients.getRecipesByIngredient(req.params.id)
    .then(recipes => {
      if (recipes.length) {
        res.status(200).json(recipes);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find recipes for given ingredient' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: 'Failed to get recipes by ingredient' });
    });
});

module.exports = router;
