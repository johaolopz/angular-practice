import { Component } from '@angular/core';
import { EventService } from '../../services/communication-service';

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

  sendTask() {
    if (this.titleTask.length > 0) {
      this.activeButton = false;
    } else {
      this.activeButton = true;
    }
    console.log(`Tarea enviada con éxito ${this.titleTask}`);
  }
}