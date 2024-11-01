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

  updateEmployee(id: number, employee: IEmployee): Observable<any> {
    return this._httpClient.put(`${this.baseUrl}/empleados/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._httpClient.delete(`${this.baseUrl}/empleados/${id}`);
  }

  getEmployeeById(id: number): Observable<IEmployee> {
    return this._httpClient.get<IEmployee>(`${this.baseUrl}/empleados/${id}`);
  }
}
