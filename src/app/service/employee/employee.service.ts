import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../../model/employee';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(API_URL + `/employees`);
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(API_URL + `/employees/create`, employee);
  }
}
