import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()

  // so I guess this is our cancel evint that listens to clicks on backdrop
  // or cancel button, when it it triggers it is bound in tasks.comp with onCancelAddTask
  // therefore the condition is falsely and the component is not rendered on that same condition! sheesh.
  onCancel(){
    this.cancel.emit();
  }
}
