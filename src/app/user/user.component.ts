import {Component, computed, input, Input} from '@angular/core';
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
  @Input({required: true}) avatar!: string ;
  @Input({required: true}) name: string | undefined ;
  // input signals are READ-ONLY
  // avatar = input<string>('');
  // name = input<string>();
  OnSelectedUser() {

  }
  // imagePath = computed(() => { // angular will recompute this only if avatar is changed
  //   return './assets/users/'+this.avatar;
  // })
  get imagePath() {
    return './assets/users/'+this.avatar;
  }
}
