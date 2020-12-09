import { Component, OnInit } from '@angular/core';
import { FooditemService } from '../fooditem.service';
import foodItems from '../assests/foodlist.json';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  foods: any;
  constructor() { }

  ngOnInit() {
  }

  foods = foodItems;
 // console.log(foods);

 
}
