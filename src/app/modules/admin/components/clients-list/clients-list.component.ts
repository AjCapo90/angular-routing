import { Component, OnInit } from '@angular/core';
import { AppService, User } from '../../../../core/app.service'

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {
  public users = [] as User[]

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.appService.getUsers()
      .then(res => res.map(
        el => this.users.push({...el, completed: false})))
  }

  public onComplete(user: User) {
    this.users = this.appService.completeUser(user.id, this.users)
    console.log(this.users)
  }

}
