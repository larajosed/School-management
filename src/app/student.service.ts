import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

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

}
