// import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-task',
  standalone: false,
  templateUrl: './list-task.html',
  styleUrl: './list-task.css'
})
export class ListTask implements OnInit, OnDestroy {
  tasks: Task[] = []
  taskUpload: Task[] = []
  private subscription!: Subscription;

  @Output() taskCompleted: EventEmitter<Task> = new EventEmitter<Task>()
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter<number>()

  constructor(
    private router: Router,
    private tasksService: TasksService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // Obtener tareas del servicio
    this.tasks = this.tasksService.getTasks();

    // Suscribirse a cambios en las tareas
    this.subscription = this.tasksService.taskChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });

    // Cargar tareas desde la API
    this.apiService.loadTasks().subscribe(
      (data) => {
        if (Array.isArray(data)) {
          this.taskUpload = data;
        }
      },
      (error) => {
        console.error('Error al cargar tareas desde la API:', error);
      }
    );
  }

  ngOnDestroy(): void {
    // Cancelar la suscripción para evitar fugas de memoria
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  completeTask(task: Task): void {
    this.tasksService.completeTask(task.id);
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id);
  }

  navigateToCreate(): void {
    this.router.navigate(['/create']);
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/tasks/details', id]);
  }

  navigateToEdit(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  navigateToCompleted(): void {
    this.router.navigate(['/tasks/completed']);
  }

  navigateToDeleted(): void {
    this.router.navigate(['/tasks/deleted']);
  }
}