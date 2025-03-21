function findAllRecipes(recipes, ingredients, supplies) {
    const suppliesSet = new Set(supplies);
    const recipeMap = new Map();
    const result = [];
    let createdRecipe = true;

    // Map each recipe to its required ingredients
    recipes.forEach((recipe, i) => recipeMap.set(recipe, ingredients[i]));

    while (createdRecipe) {
        createdRecipe = false;

        for (const [recipe, ingredients] of recipeMap) {
            if (suppliesSet.has(recipe)) continue; // Skip already created recipes

            if (ingredients.every(ingredient => suppliesSet.has(ingredient))) {
                result.push(recipe);
                suppliesSet.add(recipe);
                createdRecipe = true;
            }
        }
    }

    return result;
}