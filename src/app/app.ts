import { Component, OnInit } from '@angular/core';
import { Task } from './models/task.interface';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App implements OnInit {
  
  tasks: Task[] = [];
  
  constructor(private service: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.service.getTasks()
  }
  
  addTask(task: Task): void {
    this.service.addTask(task)
  }

  markTaskCompleted(task: Task): void {
    this.service.completeTask(task.id)
  }

  deleteTask(id: number): void {
    this.service.deleteTask(id)
  } 
}