import {Component, OnInit} from '@angular/core';
import {Department} from '../../model/department';
import {DepartmentService} from '../../service/department/department.service';
import {Employee} from '../../model/employee';
import {EmployeeService} from '../../service/employee/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  departments: Department[] = [];
  employee: Employee = {};

  constructor(private departmentService: DepartmentService,
              private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getAllDepartment();
  }

  public getAllDepartment() {
    this.departmentService.getAllDepartment().subscribe(data => {
      this.departments = data;
    });
  }

  public createEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe();
  }
}
