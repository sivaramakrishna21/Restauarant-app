import { Component, OnInit } from '@angular/core';
import {receipe} from '../receipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  receipes:receipe[]=[
    new receipe('donout','its french special','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new receipe('chocolate','most eatble across the world','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  constructor() {
   }

  ngOnInit(): void {
  }

}
