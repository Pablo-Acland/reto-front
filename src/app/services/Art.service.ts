import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

constructor() { }
private list: string []= [];

public getList(){return this.list}
public addArt(art:string){
  this.list.push(art);
}
}
