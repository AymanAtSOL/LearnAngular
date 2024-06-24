import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { CommonModule } from '@angular/common';

type User = {
    id: string,
    name: string,
    avatar: string,
  };
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
    users = DUMMY_USERS;
    selectedUserId? :string;
    get selectedUser() {
        let user = this.users.find(user => user.id === this.selectedUserId)!;
        return user;
    }
    onSelectUser(id: string) {  
        this.selectedUserId = id;
    }
}
