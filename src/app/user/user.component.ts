import {Component, computed, EventEmitter, input, Input, output, Output} from '@angular/core';
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
  @Input({required: true}) id!: string ;
  @Input({required: true}) avatar!: string ;
  @Input({required: true}) name: string | undefined ;
  @Output() selehct = new EventEmitter();
  select = output<string>(); // does the same thing and is used in the same way, but it is shorter and no decorator
  // input signals are READ-ONLY
  // avatar = input<string>('');
  // name = input<string>();
  get imagePath() {
    return './assets/users/'+this.avatar;
  }
  OnSelectUser(id: string) {
    this.select.emit(this.id);
  }
  // imagePath = computed(() => { // angular will recompute this only if avatar is changed
  //   return './assets/users/'+this.avatar;
  // })
}
