import { Component, EventEmitter, getNgModuleById, OnInit, Output } from '@angular/core';
export interface item{id:number, name:string, harga:number}
export interface SelectedItem{id:number, name:string, harga:number, amount:number}
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
  public selectedItem: SelectedItem[] = []
  constructor() { }

  ngOnInit(): void {
  }

  @Output() sendData = new EventEmitter<any>()
  
  additem(item:item){
    const duplicatedItemIndex = this.selectedItem.findIndex(({id}) => id === item.id)
    if (duplicatedItemIndex >= 0) {
      this.selectedItem[duplicatedItemIndex].amount+=1
    }else{
      this.selectedItem.push({...item, amount:1})
      this.sendData.emit(this.selectedItem)
    }
  }

}
