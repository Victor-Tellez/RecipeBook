import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from'../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Burrito',
    'This is a test1',
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Breakfast_burritos.jpg'),
    new Recipe('Pancake',
    'This is a test2',
    'https://upload.wikimedia.org/wikipedia/commons/4/43/Blueberry_pancakes_%283%29.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
