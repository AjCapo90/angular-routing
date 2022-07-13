import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { AppService, User } from '../../../../core/app.service'

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css'],
})
export class ClientsListComponent implements OnInit {
  public users = [] as User[]

  // ADD NEW USER FORM
  public addNewUserForm = new FormGroup({
    name: new FormControl(''),
    street: new FormControl(''),
  });

  // ADD MODIFY USER'S NAME INPUT
  public modifyUserName = new FormControl('')

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.appService.getUsers()
      .then(res => {
        // res.forEach(el => this.users.push({...el, completed: false}))
        this.users = res.map((user, index) => {
          return {
            ...user,
            completed: false,
          }
        })
      })
  }

  public onComplete(user: User) {
    this.appService.patchUser2(user.id, {completed: true}).then((response) => {
      this.users = this.appService.updateUser(this.users, response)
    })
    console.log(this.users)
  }

  public onModifyName(user: User) {
    this.appService.patchUser2(user.id, this.checkName(user)).then((response) => {
      this.users = this.appService.updateUser(this.users, response)
    })
    this.modifyUserName = new FormControl('')
  }

  private checkName(user: User) {
    return this.modifyUserName.value ? {name: user.name + this.modifyUserName.value} : {name: user.name + '!'}
  }

  // DELETE USER
  public onDeleteUser(user: User) {
    this.appService.deleteUser(user.id).then((response) => {
      this.users = this.appService.updateUser(this.users, response)
    })
  }


  public onPutUser(user: User) {
    this.appService.putUser(user.id, this.users)
  }

  // ADD NEW USER FUNCTIONS
  public async addNewUser() {
    const newUser = await this.appService.postUser(this.users, this.addNewUserForm)
      .then((response) => response.json())
      .then((json) => json);
    console.log(newUser)
    console.log(this.users)
    this.users = this.users.concat(newUser)
  }


}