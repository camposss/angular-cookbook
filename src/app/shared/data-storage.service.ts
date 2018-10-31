import { Injectable } from "@angular/core";
import {Http, Response} from "@angular/http";
import { RecipeService } from "../recipes/recipes.service";
import Recipe  from "../recipes/recipe.model";
import { map, tap } from 'rxjs/operators'; 
import { AuthService } from "../auth/auth.service";


@Injectable()
export class DataStorageService{
    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService){

    }

    storeRecipe(){
        const token = this.authService.getToken();

       return this.http.put('https://angular-recipe-85a8e.firebaseio.com/recipes.json?auth='+token, 
        this.recipeService.getRecipes());
    }
    getRecipes() {
        const token = this.authService.getToken();
        this.http
            .get('https://angular-recipe-85a8e.firebaseio.com/recipes.json?auth='+ token)
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