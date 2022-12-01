import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { ArtService } from '../services/Art.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent {

  constructor( private artService:ArtService) { }

  public list:string[]=[]
  public hide:boolean = false;

  public getCart(){
    this.list= this.artService.getList();
    this.hide= !this.hide;
  }

  
  



}
