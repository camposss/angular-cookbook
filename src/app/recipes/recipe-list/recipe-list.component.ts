import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("A test Recipe", "This is a test", "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjGvanClafeAhXI31QKHbBiBWEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.southernliving.com%2Frecipes%2Fcreamy-rice-scallops-recipe&psig=AOvVaw2lyx_kggkSbtE10gLXQjfZ&ust=1540748481801401"),
    new Recipe("A test Recipe", "This is a test", "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjGvanClafeAhXI31QKHbBiBWEQjRx6BAgBEAU&url=https%3A%2F%2Fwww.southernliving.com%2Frecipes%2Fcreamy-rice-scallops-recipe&psig=AOvVaw2lyx_kggkSbtE10gLXQjfZ&ust=1540748481801401")
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
