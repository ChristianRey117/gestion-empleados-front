import { Routes } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';

export const routes: Routes = [
  {
    path: 'empleados',
    component: ListEmployeeComponent,
  },
  {
    path: '',
    redirectTo: 'empleados',
    pathMatch: 'full',
  },
];
