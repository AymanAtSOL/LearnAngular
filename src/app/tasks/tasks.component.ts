import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import {dummyTasks} from "./dummy-tasks";
@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent]
})
export class TasksComponent {
  @Input() name!: string;
  @Input() id!: string;
  tasks = dummyTasks;

  get selectedUserTasks () {
    return this.tasks.filter(task => task.userId === this.id); // id is userId
  }
}
