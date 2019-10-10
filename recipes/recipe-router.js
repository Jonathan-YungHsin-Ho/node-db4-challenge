const express = require('express');

const Recipes = require('./recipe-model');

const router = express.Router();

// GET /api/recipes endpoint - FUNCTIONAL
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
router.get('/:id/shoppingList', (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then()
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: 'Failed to get shopping list for that recipe' });
    });
});

// GET /api/recipes/:id/instructions endpoint - FUNCTIONAL
router.get('/:id/instructions', (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(instructions => {
      if (instructions.length) {
        res.status(200).json(instructions);
      } else {
        res
          .status(400)
          .json({ message: 'Could not find instructions for that recipe' });
      }
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: 'Failed to get instructions for that recipe' });
    });
});

module.exports = router;
