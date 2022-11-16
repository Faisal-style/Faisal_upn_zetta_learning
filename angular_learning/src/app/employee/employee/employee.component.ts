import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { employ, EmployeeService } from '../employee.service';

export interface employs {
  id: number;
  nama: string;
  bio: string;
  avaibility: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  public employs: Observable<employ[]>;
  constructor(private employservice: EmployeeService) {
    this.employs = this.employservice.employ$;
    console.log(this.employs);
  }

  ngOnInit(): void {}
  displayedColumn: string[] = ['id', 'nama', 'bio', 'avaibility', ''];
}
