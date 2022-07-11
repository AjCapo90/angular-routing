import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  fullName: string;
  street: string;
  city: string;
  initials: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private API_URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get(this.API_URL).toPromise() as Promise<User[]>;
  }
}