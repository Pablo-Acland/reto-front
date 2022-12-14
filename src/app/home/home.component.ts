import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ArtService } from '../services/Art.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];
  constructor(private dataService: DataService, private artService: ArtService) { }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    });
  }

  public addToCart(art:string){
    
      this.artService.addArt(art);
      console.log(this.artService.getList());
  }

}
