import { Component, computed, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
import { CommonModule } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // aUser = DUMMY_USERS[randomIndex];
  aUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assests/users/'+this.aUser().avatar);
  OnSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.aUser.set(DUMMY_USERS[randomIndex]);
  }
  // get imagePath() {
  //   return './assets/users/'+this.aUser().avatar
  // }
}
