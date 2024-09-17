document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const ingredients = document.getElementById('ingredients').value;
    const steps = document.getElementById('steps').value;

    const recipe = {
        title,
        ingredients,
        steps
    };

    addRecipeToList(recipe);
    saveRecipeToLocalStorage(recipe);

    document.getElementById('recipe-form').reset();
});

function addRecipeToList(recipe) {
    const recipeList = document.getElementById('recipe-list');

    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');

    recipeDiv.innerHTML = `
        <h3>${recipe.title}</h3>
        <p><strong>المكونات:</strong> ${recipe.ingredients}</p>
        <p><strong>خطوات التحضير:</strong> ${recipe.steps}</p>
    `;

    recipeList.appendChild(recipeDiv);
}

function saveRecipeToLocalStorage(recipe) {
    let recipes = localStorage.getItem('recipes');
    if (recipes) {
        recipes = JSON.parse(recipes);
    } else {
        recipes = [];
    }

    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

function loadRecipesFromLocalStorage() {
    let recipes = localStorage.getItem('recipes');
    if (recipes) {
        recipes = JSON.parse(recipes);
        recipes.forEach(recipe => addRecipeToList(recipe));
    }
}

document.addEventListener('DOMContentLoaded', loadRecipesFromLocalStorage);
