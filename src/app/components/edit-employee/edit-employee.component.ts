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
    const employeeForm: IEmployee = this.formEmployee.getRawValue();

    console.log(this.formEmployee.getRawValue() === this.employee);
  }
}
