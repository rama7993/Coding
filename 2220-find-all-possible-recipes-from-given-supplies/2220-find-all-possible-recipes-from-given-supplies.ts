function findAllRecipes(recipes, ingredients, supplies) {
    const suppliesSet = new Set(supplies);
    const recipeMap = new Map();
    const result = [];
    let canCreateMore = true;

    // Map each recipe to its required ingredients
    recipes.forEach((recipe, i) => recipeMap.set(recipe, ingredients[i]));

    while (canCreateMore) {
        canCreateMore = false;

        for (const [recipe, ing] of recipeMap) {
            if (suppliesSet.has(recipe)) continue; // Skip already created recipes

            if (ing.every(ingredient => suppliesSet.has(ingredient))) {
                result.push(recipe);
                suppliesSet.add(recipe);
                canCreateMore = true;
            }
        }
    }

    return result;
}