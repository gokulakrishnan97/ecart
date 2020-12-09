import { Injectable } from '@angular/core';
import foods from './assests/foodlist.json';

@Injectable({
  providedIn: 'root'
})
export class FooditemService {

  constructor() { }
  
  getAllFoods(){
    return foods;
  }
}
