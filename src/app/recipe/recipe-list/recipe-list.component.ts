import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test recipe', 'hellllooo', 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
