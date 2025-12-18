// import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-list-task',
  standalone: false,
  templateUrl: './list-task.html',
  styleUrl: './list-task.css'
})
export class ListTask {
  @Input('listTasks') tasks: Task[] = []
  @Input() taskUpload: Task[] = []
  
  @Output() taskCompleted: EventEmitter<Task> = new EventEmitter<Task>()
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter<number>()

  completeTask(task: Task): void {
    this.taskCompleted.emit(task);
  }

  deleteTask(id: number): void {
    this.taskDeleted.emit(id);
  }
}