import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-task-details',
  standalone: false,
  templateUrl: './task-details.html',
  styleUrl: './task-details.css'
})
export class TaskDetails implements OnInit {
  task: Task | undefined;
  taskId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tasksService: TasksService
  ) { }

  ngOnInit(): void {
    // Obtener el ID de la tarea desde la ruta
    this.route.params.subscribe(params => {
      this.taskId = +params['id'];
      this.loadTask();
    });
  }

  loadTask(): void {
    const tasks = this.tasksService.getTasks();
    this.task = tasks.find(t => t.id === this.taskId);
  }

  goBack(): void {
    this.router.navigate(['/tasks']);
  }
}
