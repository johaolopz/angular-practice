import { Component } from '@angular/core';
import { Task } from './models/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App {

  cambio: boolean = true;

  tasks: Task[] = [
      {
        id: 1,
        title: 'Tarea 1',
        completed: false
      },
      {
        id: 2,
        title: 'Tarea 2',
        completed: false
      },
      {
        id: 3,
        title: 'Tarea 3',
        completed: false
      },
      {
        id: 4,
        title: 'Tarea 4',
        completed: false
      },
      {
        id: 5,
        title: 'Tarea 5',
        completed: false
      },
      {
        id: 6,
        title: 'Tarea 6',
        completed: false
      },
      {
        id: 7,
        title: 'Tarea 7',
        completed: false
      }
    ];
  
}