import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable, of } from 'rxjs';
import { EmployeeService } from '../employee.service';
export interface Employee {
  id: string;
  nama: string;
  bio: string;
  avaibility: string;
  viewdetail: string;
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  private employid: string | null = null;
  public employee: Employee | null = null;

  constructor(
    private route: ActivatedRoute,
    private employservice: EmployeeService
  ) {
    this.employid = this.route.snapshot.paramMap.get('id');
    console.log(this.employid);
  }

  ngOnInit(): void {
    if (typeof this.employid == 'string') {
      this.employee = this.employservice.getEmployById(this.employid);
    }
  }
}
