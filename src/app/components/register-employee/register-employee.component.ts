import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-employee',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [EmployeeService],
  templateUrl: './register-employee.component.html',
  styleUrl: './register-employee.component.scss',
})
export class RegisterEmployeeComponent {
  formEmployee: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
  });

  constructor(
    private readonly _employeeService: EmployeeService,
    private readonly _router: Router
  ) {}

  saveEmployee(): void {
    if (this.formEmployee.valid) {
      console.log(this.formEmployee.getRawValue());
      this._employeeService
        .saveEmployee({
          nombre: this.formEmployee.value.name,
          apellido: this.formEmployee.value.lastName,
          email: this.formEmployee.value.email,
        })
        .pipe(
          tap(() => {
            this._router.navigate(['/empleados'], { replaceUrl: true });
          })
        )
        .subscribe();
    }
  }
}
