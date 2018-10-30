import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  private subscriptions: Subscription[] = [];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscriptions.push(this.slService.ingredientsChanged.subscribe( (ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    }))
  }
  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscriptions.forEach(
      sub=> sub.unsubscribe()
    )
  }
}
