document.addEventListener('DOMContentLoaded', function () {
    const recipeForm = document.getElementById('recipe-form');
    const recipeList = document.getElementById('recipes');
  
    // Load recipes from local storage
    function loadRecipes() {
      const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      recipeList.innerHTML = '';
      recipes.forEach(renderRecipe);
    }
  
    // Function to render a recipe
    function renderRecipe(recipe) {
      const recipeItem = document.createElement('li');
      recipeItem.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      `;
      recipeList.appendChild(recipeItem);
    }
  
    // Add new recipe to local storage and update the display
    recipeForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('recipe-name').value;
      const ingredients = document.getElementById('recipe-ingredients').value;
      const instructions = document.getElementById('recipe-instructions').value;
  
      const newRecipe = {
        name: name,
        ingredients: ingredients,
        instructions: instructions
      };
  
      const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      recipes.push(newRecipe);
      localStorage.setItem('recipes', JSON.stringify(recipes));
  
      renderRecipe(newRecipe);
      recipeForm.reset();
    });
  
    // Initial load of recipes
    loadRecipes();
  });