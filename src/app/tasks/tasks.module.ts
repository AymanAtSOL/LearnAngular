import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations:[TasksComponent, TaskComponent, NewTaskComponent],
  imports:[SharedModule, CommonModule, FormsModule],
  exports:[TasksComponent] // only this is exported because it is used by another components that need it (UserComponent)
})

export class TasksModule{

}