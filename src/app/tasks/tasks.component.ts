import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import {type Task, type NewTask} from './task/task.model'
import { CardComponent } from "../shared/card/card.component";
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent, CardComponent]
})
export class TasksComponent {
  @Input() name!: string;
  @Input() id!: string;
  
  private tasksService:TasksService
  constructor(tasksService: TasksService){
    this.tasksService = tasksService;
  }
  // private tasksService = new TasksService(); // fresh instance not recommended for use in other components that might alter the data.
  isAddingTask = false;
  get selectedUserTasks () {
    return this.tasksService.getUserTasks(this.id); // id is userId
  }

  onCompTask(id: string){
    // this.tasks = this.tasks.filter(task => task.id !== id)
  }
  onAddTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddTaskData(task:NewTask) {
    // this.tasksService.addTask();
    this.isAddingTask = false;
  }
}
