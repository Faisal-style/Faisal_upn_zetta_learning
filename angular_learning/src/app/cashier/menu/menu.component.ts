import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CashierService, Item } from '../../cashier.service';
export interface items {
  id: number;
  name: string;
  Harga: number;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public items: Observable<Item[]>;
  constructor(private cashierservice: CashierService) {
    this.items = this.cashierservice.items$;
  }

  ngOnInit(): void {}
  additem(item: Item): void {
    this.cashierservice.additem(item);
  }
}
