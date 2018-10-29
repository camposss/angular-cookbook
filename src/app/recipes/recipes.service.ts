import Recipe from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({providedIn:'root'})
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),

        new Recipe(
            'Another Test Recipe', 
            'This is simply a test', 
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 30)
            ]
        )

    ];

    constructor(private slService: ShoppingListService){

    }
    getRecipes(){
        // Return a copy of the array without messing with original
        return this.recipes.slice();
    }
    getRecipe(index: number){
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
    
}