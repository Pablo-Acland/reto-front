import { Component, Input, OnInit } from '@angular/core';
import { ArtService } from '../services/Art.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{

  constructor() {

   }
   @Input() list:string[]=[]

   
  @Input()  hide:boolean = false;

 


}
