import { outputAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CashierService, SelectedItems } from '../cashier.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  public items: Observable<SelectedItems[]>;
  public total: Observable<number>;

  // private selectedItemSource: selectedItem = new selectedItem([]);
  constructor(private CashierService: CashierService) {
    this.items = this.CashierService.selectedItems$;
    this.total = this.CashierService.selectedItems$.pipe(
      map((items) =>
        items.reduce((total, item) => (total += item.amount * item.harga), 0)
      )
    );
  }

  ngOnInit(): void {}

  ngAfterContentChecked(): void {
    this.total = this.CashierService.selectedItems$.pipe(
      map((items) =>
        items.reduce((total, item) => (total += item.amount * item.harga), 0)
      )
    );
  }

  removeitem(item: SelectedItems) {
    this.CashierService.removeItem(item);
  }
}
