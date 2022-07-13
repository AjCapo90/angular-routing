import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

export interface User {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
  };
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

  public updateUser(users: User[], valueFromServer: User) {
    return users.map((user) => {
      return user.id === valueFromServer.id ? valueFromServer : user;
    });
  }



  // PATCH WITH FETCH
  public patchUser(userId: User['id'], users: User[]) {

    const user = users.find(user => {
      return userId === user.id
    })
    setTimeout(() => {
      fetch(`${this.API_URL}/${user?.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          completed: user?.completed,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
    }, 2000)

  }

  // PATCH WITH HTTP PATCH & SUBSCRIBE
  public patchUser2(userId: User['id'], payload: Partial<User>) {
    return this.http.patch(`${this.API_URL}/${userId}`, payload).toPromise() as Promise<User>
  }

  // DELETE 
  public deleteUser(userId: User['id']) {
    return this.http.delete(`${this.API_URL}/${userId}`).toPromise() as Promise<User>
  }

  // PUT WITH FETCH
  public putUser(userId: User['id'], users: User[]) {

    const user = users.find(user => {
      return userId === user.id
    })

    fetch(`${this.API_URL}/${user?.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: user?.id,
        name: user?.name,
        address: {
          street: user?.address.street,
          city: user?.address.city,
        },
        completed: user?.completed,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  // POST A NEW USER
  public postUser(users: any[], formData: FormGroup) {

    const newId = users.length + 1

    return fetch(this.API_URL, {
      method: 'POST',
      body: JSON.stringify({
        id: newId,
        name: formData.controls['name'].value,
        address: {
          street: formData.controls['street'].value,
          city: '',
        },
        completed: false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  }
}