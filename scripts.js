// Sample recipe data stored as an array of objects

const recipes = [
    {
        title: "Spaghetti Bolognese",
        ingredients: "Spaghetti, Ground Beef, Tomato Sauce, Garlic, Onions, Olive Oil",
        steps: "1. Boil pasta. 2. Cook ground beef. 3. Add sauce and garlic. 4. Mix with pasta."
    },
    {
        title: "Chicken Curry",
        ingredients: "Chicken, Curry Powder, Coconut Milk, Onions, Garlic, Ginger",
        steps: "1. Cook chicken. 2. Add onions, garlic, ginger. 3. Add coconut milk and curry powder. 4. Simmer."
    },
    {
        title: "Vegetable Stir-fry",
        ingredients: "Broccoli, Carrots, Bell Peppers, Soy Sauce, Garlic, Olive Oil",
        steps: "1. Stir-fry vegetables in olive oil. 2. Add garlic and soy sauce. 3. Serve with rice."
    }
   
];

const displayRecipes = () => {
    const recipelist = document.querySelector("#recipeList");
    recipelist.innerHTML = "";

    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("pp", "p-4", "rounded-lg", "mb-4", "shadow");
        recipeCard.innerHTML = `

            <h2 class="text-lg font-bold oo">${recipe.title}</h2>
            <p class="l5"><strong>Ingredients:&emsp;</strong> ${recipe.ingredients}</p>
            <p class="l5"><strong>Steps:&emsp;</strong> ${recipe.steps}</p>

        `;
        recipelist.appendChild(recipeCard);
    })
}

const addRecipe = () => {
    const recipeTitleInput = document.querySelector("#recipeTitle");
    const IngredientsInput = document.querySelector("#Ingredients");
    const recipeSpepsInput = document.querySelector("#recipeSpeps");
    
    
    const recipeTitle = recipeSpepsInput.value.trim();
    const Ingredients = IngredientsInput.value.trim();
    const recipeSpeps = recipeSpepsInput.value.trim();
    
    if (recipeTitle !== "" && recipeSpeps !== "" && Ingredients !== "") {
       
        const newRecipe = {
            title: recipeTitle,
            ingredients: Ingredients,
            steps: recipeSpeps
        };
        recipes.push(newRecipe);
        recipeTitleInput.value = "";
        IngredientsInput.value = "";
        recipeSpepsInput.value = "";
    displayRecipes();
}
else {
    alert("Please fill in all fields ✨⏲");
}
}
const addRecipeBtn = document.querySelector("#addRecipe");
addRecipeBtn.addEventListener("click", addRecipe);
displayRecipes();
