import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from './models/task.interface';
import { TasksService } from './services/tasks.service';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})

export class App implements OnInit, OnDestroy {

  tasks: Task[] = [];
  taskUpload: Task[] = [];
  isLoggedIn: boolean = false;
  private subscription!: Subscription;
  private authSub!: Subscription;

  constructor(
    private service: TasksService,
    private serviceAPI: ApiService,
    private authService: AuthService,
    private router: Router
  ) {
    this.subscription = this.service.taskChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });

    this.authSub = this.authService.isLoggedIn().subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.tasks = this.service.getTasks()

    this.serviceAPI.loadTasks().subscribe(
      (data) => {
        if (Array.isArray(data)) {
          this.taskUpload = data
        }
      },
      (error) => {
        console.error('Error al cargar tareas desde la API:', error)
      }
    )
  }

  ngOnDestroy(): void {
    // Cancelar la suscripción para evitar fugas de memoria
    this.subscription.unsubscribe();
    this.authSub.unsubscribe();
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