import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../interfaces/IEmployee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl: string = 'http://localhost:8080/api/v1';
  constructor(private readonly _httpClient: HttpClient) {}

  getAllEmployees(): Observable<IEmployee[]> {
    return this._httpClient.get<IEmployee[]>(this.baseUrl + '/empleados');
  }

  saveEmployee(employee: IEmployee): Observable<IEmployee> {
    return this._httpClient.post<IEmployee>(
      this.baseUrl + '/empleados',
      employee
    );
  }
}
