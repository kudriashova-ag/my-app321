import { Component } from '@angular/core';
import { User } from '../User';
import { NgFor, NgIf } from '@angular/common';
import { UserSingleComponent } from '../user-single/user-single.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserSingleComponent, NgIf, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  users: User[] = [
    { id: 1, name: 'Tom', email: 'tom@gmail.com' },
    { id: 2, name: 'Bob', email: 'bob@gmail.com' },
  ];

  isAddUserOpen: boolean = false;
  toggleIsAddUserOpen() {
    this.isAddUserOpen = !this.isAddUserOpen;
  }

  userName: string = '';
  userEmail: string = '';

  addUser() {
    this.users.push({
      id: new Date().getTime(),
      name: this.userName,
      email: this.userEmail,
    });
  }
}
