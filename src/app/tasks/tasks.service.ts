import { Injectable } from "@angular/core";
import { dummyTasks } from "./dummy-tasks";
import { type NewTask } from "./task/task.model";

@Injectable({providedIn: 'root'}) // by adding this decorator this instance will be craeted once (Singleton) therefore all other componets are using same data
export class TasksService {
  private tasks = dummyTasks
  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  getUserTasks(userId: string){
    return this.tasks.filter(task => task.userId === userId); // id is userId
  }
  addTask(task: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
    });
    this.saveTasks();
  }
  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }
}