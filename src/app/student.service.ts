import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:4200/student';
  }

  getAll(): Promise<any> {
    return firstValueFrom(this.httpClient.get(`${this.baseUrl}`))
  };

  add(student: Student): Promise<any> {
    return firstValueFrom(this.httpClient.post(`${this.baseUrl}`, student))
  };

  getById(id: number): Promise<any> {
    return firstValueFrom(this.httpClient.get(`${this.baseUrl}/${id}`))
  }

  delete(id: number): Promise<any> {
    return firstValueFrom(this.httpClient.delete(`${this.baseUrl}/${id}`))
  }
}
