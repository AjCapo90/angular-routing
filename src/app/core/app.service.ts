import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
  }
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class AppService {
  private API_URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(public http: HttpClient) {}

  public getUsers() {
    return this.http.get(this.API_URL).toPromise() as Promise<User[]>;
  }

  public completeUser(userId: User['id'], users: User[]) {
    return users.map((user) => {
      const completed = user.id === userId ? true : user.completed;
      return { ...user, completed };
    });
  }
}