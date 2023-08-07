import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL = "http://localhost:8080/api/v1/student"
  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  getStudentById(s_id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseURL}/${s_id}`);
  }

  createStudent(std: Student): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, std);
  }

  updateStudent(s_id: number, std: Student): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${s_id}`, std);
  }

  deleteStudent(s_id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${s_id}`);
  }
}
