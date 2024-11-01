import { Routes } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';

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
  {
    path: 'registrar-empleados',
    component: RegisterEmployeeComponent,
  },
  {
    path: 'editar-empleados',
    component: EditEmployeeComponent,
  },
];
