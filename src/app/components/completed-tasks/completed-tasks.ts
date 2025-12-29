import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-tasks',
  standalone: false,
  templateUrl: './completed-tasks.html',
  styleUrl: './completed-tasks.css'
})
export class CompletedTasks implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.getCompletedTasks();
  }

  goBack(): void {
    this.router.navigate(['/tasks']);
  }
}
