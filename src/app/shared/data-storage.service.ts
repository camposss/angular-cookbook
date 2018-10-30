import { Injectable } from "@angular/core";
import {Http, Response} from "@angular/http";
import { RecipeService } from "../recipes/recipes.service";
import Recipe  from "../recipes/recipe.model";
import { map, tap } from 'rxjs/operators'; 


@Injectable()
export class DataStorageService{
    constructor(private http: Http, private recipeService: RecipeService){

    }

    storeRecipe(){
       return this.http.put('https://angular-recipe-85a8e.firebaseio.com/recipes.json', 
        this.recipeService.getRecipes());
    }
    getRecipes() {
        this.http
            .get('https://angular-recipe-85a8e.firebaseio.com/recipes.json')
            .pipe(
                map((response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (const recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }),
                tap((recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                })
            );
    }
}