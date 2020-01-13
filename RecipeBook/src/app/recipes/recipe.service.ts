import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Burrito',
               'Yummy Burrito',
               'https://upload.wikimedia.org/wikipedia/commons/4/4c/Breakfast_burritos.jpg',
               [
                 new Ingredient('Meat',1),
                 new Ingredient('Pinto Beans',35),
                 new Ingredient('Rice',5)
               ]),
    new Recipe('Pancake',
               'Delicious Pancake',
               'https://upload.wikimedia.org/wikipedia/commons/4/43/Blueberry_pancakes_%283%29.jpg',
               [
                 new Ingredient('Flour',100),
                 new Ingredient('Eggs',4),
                 new Ingredient('Blue berries',7)
               ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    // this is how you get a copy of the recipes array
    // not the actual array
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
