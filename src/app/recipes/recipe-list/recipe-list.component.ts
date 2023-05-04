import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecepeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'Is a test 1', 'https://assets.telegraphindia.com/telegraph/2022/Dec/1670922198_shutterstock_2146741411-1.jpg'),
    new Recipe('Test Recipe 1', 'Is a test 1', 'https://assets.telegraphindia.com/telegraph/2022/Dec/1670922198_shutterstock_2146741411-1.jpg'),
  ];

  constructor() {}

  ngOnInit() {

  }

}
