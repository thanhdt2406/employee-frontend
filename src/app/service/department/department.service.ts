import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Department} from '../../model/department';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) {

  }

  public getAllDepartment(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(API_URL + '/departments');
  }
}
