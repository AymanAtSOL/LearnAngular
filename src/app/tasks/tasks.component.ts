import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import {dummyTasks} from "./dummy-tasks";
import { NewTaskComponent } from "./new-task/new-task.component";
@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input() name!: string;
  @Input() id!: string;
  tasks = dummyTasks;
  isAddingTask = false;
  get selectedUserTasks () {
    return this.tasks.filter(task => task.userId === this.id); // id is userId
  }

  onCompTask(id: string){
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
  onAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
