import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  _users: User[];

  constructor(private userService: UserService) {}

  ngOnInit(){

    this.userService.getUsers().subscribe(
    res => { this._users = res; },
    error => { console.log('an error occurred'); })
    console.log(this._users);

    }
}
