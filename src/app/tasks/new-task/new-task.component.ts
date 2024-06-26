import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type Task, type NewTask} from '../task/task.model'
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>()
  formTitle = '';
  formSummary = '';
  formDate = '';

  private tasksService = inject(TasksService);
  onSubmit() {
    this.tasksService.addTask({title:this.formTitle, summary:this.formSummary, date:this.formDate}, this.userId);
    this.close.emit();
  }
  // so I guess this is our cancel evint that listens to clicks on backdrop
  // or cancel button, when it it triggers it is bound in tasks.comp with onCancelAddTask
  // therefore the condition is falsely and the component is not rendered on that same condition! sheesh.
  onCancel(){
    this.close.emit();
  }
}
