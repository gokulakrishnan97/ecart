import { Component, OnInit } from '@angular/core';
import { FooditemService } from '../fooditem.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  foods: any;
  constructor(private foodItem: FooditemService) {
    
  }
  ngOnInit() {
    let url = 'http://localhost:3000/foods'
    this.foodItem.getAllFoods(url) .subscribe((data) =>  {
        console.log(data);
        this.foods = data;
    });
  }
}
