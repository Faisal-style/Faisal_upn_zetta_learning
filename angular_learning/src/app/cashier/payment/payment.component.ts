import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedItem } from '../menu/menu.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  @Input() public payments: SelectedItem[] = [];
  @Output() itemchanges: EventEmitter<SelectedItem[]> = new EventEmitter<
    SelectedItem[]
  >();

  // private selectedItemSource: selectedItem = new selectedItem([]);
  constructor() {}

  ngOnInit(): void {}

  removeItem(itemToBeRemoved: SelectedItem) {
    const itemIndex = this.payments.findIndex(
      ({ id }) => id === itemToBeRemoved.id
    );
    if (this.payments[itemIndex].amount > 1) {
      this.payments[itemIndex].amount -= 1;
    } else {
      this.payments.splice(itemIndex, 1);
      console.log(this.payments);
    }
  }
}
