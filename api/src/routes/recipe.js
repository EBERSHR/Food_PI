const { Router } = require('express');
const { getRecipes, addRecipes, getRecipeId } = require('../controllers/recipeController');
const router = Router();

router.get("/", getRecipes)
router.get("/:id", getRecipeId)
router.post("/add", addRecipes)
// router.get("/searchName", searchPokemon)

module.exports = router;

// "http://localhost:3001/recipe"