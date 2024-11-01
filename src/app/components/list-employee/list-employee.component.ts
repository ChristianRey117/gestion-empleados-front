import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../interfaces/IEmployee';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [CommonModule],
  providers: [EmployeeService],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.scss',
})
export class ListEmployeeComponent implements OnInit {
  listOfEmployee: IEmployee[];

  constructor(
    private readonly _employeeService: EmployeeService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    // this.listOfEmployee = [
    //   {
    //     id: 1,
    //     nombre: 'Christian',
    //     lastName: 'Reyes',
    //     email: 'christian@gmail.com',
    //   },
    // ];

    this._employeeService
      .getAllEmployees()
      .pipe(
        tap((employees) => {
          console.log('employes from db--->', employees);
          this.listOfEmployee = employees;
        })
      )
      .subscribe();
  }

  deleteEmployee(id: number): void {
    this._employeeService
      .deleteEmployee(id)
      .pipe(
        tap((empleados) => {
          this.listOfEmployee = empleados;
        })
      )
      .subscribe();
  }

  editEmployee(employee: IEmployee): void {
    this._router.navigate(['/editar-empleados'], {
      replaceUrl: true,
      state: {
        employee: employee,
      },
    });
  }
}
