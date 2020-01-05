import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Burrito',
    'Yummy Burrito',
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Breakfast_burritos.jpg'),
    new Recipe('Pancake',
    'Delicious Pancake',
    'https://upload.wikimedia.org/wikipedia/commons/4/43/Blueberry_pancakes_%283%29.jpg')
  ];

  getRecipes(){
    // this is how you get a copy of the recipes array
    // not the actual array
    return this.recipes.slice();
  }
}
