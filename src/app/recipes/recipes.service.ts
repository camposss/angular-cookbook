import Recipe from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();
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
    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number){
        this.recipes.slice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
    
}