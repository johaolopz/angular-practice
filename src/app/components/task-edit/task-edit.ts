import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-task-edit',
  standalone: false,
  templateUrl: './task-edit.html',
  styleUrl: './task-edit.css'
})
export class TaskEdit implements OnInit {
  task: Task | undefined;
  taskId: number = 0;
  taskTitle: string = '';
  taskDescription: string = '';

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

    if (this.task) {
      this.taskTitle = this.task.title;
      this.taskDescription = this.task.description || '';
    }
  }

  updateTask(): void {
    if (this.task && this.taskTitle.trim() && this.taskDescription.trim()) {
      // Actualizar la tarea
      this.task.title = this.taskTitle;
      this.task.description = this.taskDescription;

      // Guardar en el servicio (esto actualizará localStorage)
      this.tasksService.getTasks(); // Refrescar las tareas
      this.tasksService.taskChanged.next(this.tasksService.getTasks());

      // Actualizar localStorage manualmente
      const tasks = this.tasksService.getTasks();
      const taskIndex = tasks.findIndex(t => t.id === this.taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex] = this.task;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }

      console.log('Tarea actualizada:', this.task);

      // Navegar de vuelta a la lista de tareas
      this.router.navigate(['/tasks']);
    }
  }

  cancel(): void {
    this.router.navigate(['/tasks']);
  }
}
