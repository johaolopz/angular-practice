import { Component } from '@angular/core';
import { EventService } from '../../services/communication-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {
  numberTasks: number = 10;
  titleTask: string = '';
  activeButton: boolean = true;

  // Esta lógica servía para activar o desactivar el botón
  // pero ahora lo hace el formulario con las validaciones
  // sendTask() {
  //   if (this.titleTask.length > 0) {
  //     this.activeButton = false;
  //   } else {
  //     this.activeButton = true;
  //   }
  //   console.log(`Tarea enviada con éxito ${this.titleTask}`);
  // }

  sendData(form: NgForm) {
    if(form.valid) {
      console.log('Form is valid. Tarea enviada: ', this.titleTask);
    }
  }
}