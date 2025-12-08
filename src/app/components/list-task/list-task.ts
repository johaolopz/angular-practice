// import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-list-task',
  standalone: false,
  templateUrl: './list-task.html',
  styleUrl: './list-task.css'
})
export class ListTask implements OnChanges {
  @Input('listTasks') tasks: Task[] = [];
  @Input() cambio: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cambio']) {
      console.log('Nuevo valor', changes['cambio'].currentValue);
    }
  }
}