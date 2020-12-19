import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import foods from './assests/foodlist.json';

@Injectable({
  providedIn: 'root'
})
export class FooditemService {

 constructor(private http: HttpClient) { }
  
  getAllFoods(url){
    return this.http.get(url);
    //return foods;
  }
}
