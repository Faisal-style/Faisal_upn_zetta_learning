import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular_learning';
  dataPayment: { id: number; name: string; harga: number; amount: number }[] =
    [];
  receiveMenu($event: any) {
    this.dataPayment = $event;
    console.log(this.dataPayment);
  }
}
