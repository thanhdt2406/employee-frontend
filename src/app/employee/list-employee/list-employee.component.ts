import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {Observable} from 'rxjs';
import {EmployeeService} from '../../service/employee/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  public getAllEmployee() {
    this.employeeService.getAll().subscribe(data => {
      this.employees = data;
    });
  }
}
