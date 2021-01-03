import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';

const routes: Routes = [
  {
    path: 'employees',
    component: ListEmployeeComponent
  },
  {
    path: 'employees/create',
    component: CreateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
