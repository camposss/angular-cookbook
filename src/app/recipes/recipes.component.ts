import { Component, OnInit } from '@angular/core';
import Recipe from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
 
  }

}
