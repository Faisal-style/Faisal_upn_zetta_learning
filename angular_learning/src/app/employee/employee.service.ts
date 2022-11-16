import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Employee {
  id: string;
}
export interface employ {
  id: string;
  nama: string;
  bio: string;
  avaibility: string;
  viewdetail: string;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private Employ: BehaviorSubject<employ[]> = new BehaviorSubject<employ[]>([
    {
      id: '1',
      nama: 'Divaneano Aenorias Mandala',
      bio: 'sdnfijsndfinsdinndnsdnisdnisnidnisdnisndinsidnisdnis',
      avaibility: 'hadir',
      viewdetail: 'view detail',
    },
    {
      id: '2',
      nama: 'Soleh Solihun Aman',
      bio: 'sdnfijsndfinsdinndnsdnisdnisnidnisdnisndinsidnisdnis',
      avaibility: 'hadir',
      viewdetail: 'view detail',
    },
    {
      id: '3',
      nama: 'Kumala Kuman Birdale',
      bio: 'sdnfijsndfinsdinndnsdnisdnisnidnisdnisndinsidnisdnis',
      avaibility: 'hadir',
      viewdetail: 'view detail',
    },
    {
      id: '4',
      nama: 'Halland Muhammad Azhar',
      bio: 'sdnfijsndfinsdinndnsdnisdnisnidnisdnisndinsidnisdnis',
      avaibility: 'hadir',
      viewdetail: 'view detail',
    },
    {
      id: '5',
      nama: 'Proteom Nabati Doni Hardianto',
      bio: 'sdnfijsndfinsdinndnsdnisdnisnidnisdnisndinsidnisdnis',
      avaibility: 'hadir',
      viewdetail: 'view detail',
    },
  ]);

  constructor() {}

  /**
   * employ$ = this.Employ.asobser
   */
  public employ$ = this.Employ.asObservable();

  getEmployById(id: string): any {
    const employeedata = this.Employ.getValue();
    console.log(employeedata);
    const employ = employeedata.find((employ) => employ.id === id);
    return employ || null;
  }
}
