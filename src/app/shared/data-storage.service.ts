import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipes.service";
import Recipe  from "../recipes/recipe.model";
import { map, tap } from 'rxjs/operators'; 
import { AuthService } from "../auth/auth.service";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";


@Injectable()
export class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService){

    }

    storeRecipe(){
        const token = this.authService.getToken();
        // const headers = new HttpHeaders().set('Authorization', 'Bearertoken')

        //Advanced way of sending HTTP requests w/ report progress
        // const request = new HttpRequest('PUT', 'https://angular-recipe-85a8e.firebaseio.com/recipes.json',this.getRecipes(), 
        //{reportProgress: true}, params: new HttpParams().set('auth', token) )
        // return this.httpClient.request(request);
                
       return this.http.put('https://angular-recipe-85a8e.firebaseio.com/recipes.json', 
        this.recipeService.getRecipes(), {
            observe: "body",
            params: new HttpParams().set('auth', token)
        });
    }
    getRecipes() {
        const token = this.authService.getToken();
        this.http
            .get<Recipe[]>('https://angular-recipe-85a8e.firebaseio.com/recipes.json?auth='+ token)
            .pipe(
                map((recipes) => {
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