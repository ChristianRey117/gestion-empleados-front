import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../interfaces/IEmployee';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../../services/employee.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this._employeeService
          .deleteEmployee(id)
          .pipe(
            tap((empleados) => {
              this.listOfEmployee = empleados;
              Swal.fire({
                title: 'Deleted!',
                text: 'Employee has been deleted.',
                icon: 'success',
              });
            })
          )
          .subscribe();
      }
    });
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
