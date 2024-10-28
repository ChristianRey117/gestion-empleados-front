import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../interfaces/IEmployee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.scss',
})
export class ListEmployeeComponent implements OnInit {
  listOfEmployee: IEmployee[];

  ngOnInit(): void {
    this.listOfEmployee = [
      {
        id: 1,
        name: 'Christian',
        lastName: 'Reyes',
        email: 'christian@gmail.com',
      },
    ];
  }
}
