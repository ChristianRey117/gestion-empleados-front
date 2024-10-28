import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListEmployeeComponent,
    HttpClientModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gestion-empleados-front';
}
