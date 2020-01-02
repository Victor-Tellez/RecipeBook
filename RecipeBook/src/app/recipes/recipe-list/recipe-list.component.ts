import { Component, OnInit } from '@angular/core';
import { Recipe } from'../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe1',
    'This is a test1',
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Breakfast_burritos.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
