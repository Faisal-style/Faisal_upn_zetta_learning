import { Component, getNgModuleById, OnInit } from '@angular/core';
export interface item{id:number, name:string, harga:number}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public items : item[] = [
    {id : 1, name :"Coffe Latte", harga: 10000},
    {id : 2, name :"Coffe Latte", harga: 10000},
    {id : 3, name :"Coffe Latte", harga: 10000},
    {id : 4, name :"Coffe Latte", harga: 10000},
    {id : 5, name :"Coffe Latte", harga: 10000},
    {id : 6, name :"Coffe Latte", harga: 10000},
    {id : 7, name :"Coffe Latte", harga: 10000},
    {id : 8, name :"Coffe Latte", harga: 10000},
    {id : 9, name :"Coffe Latte", harga: 10000},
    {id : 10, name :"Coffe Latte", harga: 10000},
    {id : 11, name :"Coffe Latte", harga: 10000},
    {id : 12, name :"Coffe Latte", harga: 10000},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
