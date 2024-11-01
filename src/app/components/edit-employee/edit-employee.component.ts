import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../interfaces/IEmployee';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [EmployeeService],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss',
})
export class EditEmployeeComponent implements OnInit {
  formEmployee: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
  });

  employee: IEmployee =
    this._router.getCurrentNavigation().extras.state.employee;

  constructor(
    private readonly _employeeService: EmployeeService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.formEmployee.patchValue({
      name: this.employee.nombre,
      lastName: this.employee.apellido,
      email: this.employee.email,
    });
  }

  editEmployee(): void {
    const employeeForm = this.formEmployee.getRawValue();

    if (
      employeeForm.lastName === this.employee.apellido &&
      employeeForm.email === this.employee.email &&
      employeeForm.name === this.employee.nombre
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'You need to change information of employee to save it',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } else {
      this._employeeService
        .updateEmployee(this.employee.id, {
          apellido: employeeForm.lastName,
          email: employeeForm.email,
          nombre: employeeForm.name,
        })
        .pipe(
          tap((response) => {
            console.log(response);
            Swal.fire({
              title: 'Save it!',
              text: 'Employee has been updated.',
              icon: 'success',
            }).then(() =>
              this._router.navigate(['/empleados'], { replaceUrl: true })
            );
          })
        )
        .subscribe();
    }

    console.log(this.formEmployee.getRawValue(), this.employee);
  }
}
