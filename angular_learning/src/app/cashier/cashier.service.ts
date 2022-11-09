import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Item {
  id: number;
  name: string;
  harga: number;
}
export interface SelectedItems {
  id: number;
  name: string;
  harga: number;
  amount: number;
}
@Injectable({
  providedIn: 'root',
})
export class CashierService {
  private itemsource: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([
    { id: 1, name: 'Coffe Latte', harga: 10000 },
    { id: 2, name: 'Coffe Latte', harga: 10000 },
    { id: 3, name: 'Coffe Latte', harga: 10000 },
    { id: 4, name: 'Coffe Latte', harga: 10000 },
    { id: 5, name: 'Coffe Latte', harga: 10000 },
    { id: 6, name: 'Coffe Latte', harga: 10000 },
    { id: 7, name: 'Coffe Latte', harga: 10000 },
    { id: 8, name: 'Coffe Latte', harga: 10000 },
    { id: 9, name: 'Coffe Latte', harga: 10000 },
    { id: 10, name: 'Coffe Latte', harga: 10000 },
    { id: 11, name: 'Coffe Latte', harga: 10000 },
    { id: 12, name: 'Coffe Latte', harga: 10000 },
  ]);
  private selectedItemSource: BehaviorSubject<SelectedItems[]> =
    new BehaviorSubject<SelectedItems[]>([]);
  public items$ = this.itemsource.asObservable();
  public selectedItems$ = this.selectedItemSource.asObservable();

  constructor() {}

  additem(item: Item) {
    const selectedItem = this.selectedItemSource.value;
    const duplicatedItemIndex = selectedItem.findIndex(
      ({ id }) => id === item.id
    );
    if (duplicatedItemIndex >= 0) {
      this.selectedItemSource.next(
        selectedItem.map((selectedItem) => {
          return selectedItem.id === item.id
            ? { ...selectedItem, amount: selectedItem.amount + 1 }
            : selectedItem;
        })
      );
    } else {
      this.selectedItemSource.next([...selectedItem, { ...item, amount: 1 }]);
    }
  }

  removeItem(itemToBeRemoved: SelectedItems) {
    const selectedItems = this.selectedItemSource.value;
    const itemIndex = selectedItems.findIndex(
      ({ id }) => id === itemToBeRemoved.id
    );
    const itemref = selectedItems[itemIndex];
    if (itemref?.amount) {
      this.selectedItemSource.next(
        selectedItems.map((item) => {
          return item.id === itemToBeRemoved.id
            ? { ...item, amount: item.amount - 1 }
            : item;
        })
      );
    }
    if (itemref?.amount === 1) {
      this.selectedItemSource.next([
        ...selectedItems.slice(0, itemIndex),
        ...selectedItems.slice(itemIndex + 1),
      ]);
    }
  }
}
