import { Component, OnInit } from '@angular/core';

import { OrderService } from './order.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  implements OnInit { 
  
  meals: String[];
  selectedMeal: String;

  title = 'Available meals'; 

  constructor(private orderService: OrderService) { }
 
  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(): void {
    this.orderService.getMeals().then(foundMeals => this.meals = foundMeals);
  }


  onSelect(meal: String): void {
  this.selectedMeal = meal;}

}
