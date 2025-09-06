import { Component } from '@angular/core';
import { EventService } from '../../services/communication-service';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.html',
  styleUrl: './add-task.css'
})
export class AddTask {
  private taskCount = 0;
  constructor(private eventService: EventService) {}

  sendMessage() {
    this.taskCount++;
    this.eventService.emitEvent(`Tarea-${this.taskCount}`);
  }
}