import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[]=[
    new Ingredients('bananas',5),
    new Ingredients('mangoes',4)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
