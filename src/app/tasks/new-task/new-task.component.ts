import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {type Task, type NewTask} from '../task/task.model'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()
  formTitle = '';
  formSummary = '';
  formDate = '';
  @Output() add = new EventEmitter<NewTask>();
  onSubmit() {
    this.add.emit({title:this.formTitle, summary:this.formSummary, date:this.formDate});
  }
  // so I guess this is our cancel evint that listens to clicks on backdrop
  // or cancel button, when it it triggers it is bound in tasks.comp with onCancelAddTask
  // therefore the condition is falsely and the component is not rendered on that same condition! sheesh.
  onCancel(){
    this.cancel.emit();
  }
}
