import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';
import { Subject } from 'rxjs';

@Injectable({
  // Esto indica que el servicio está disponible en toda la aplicación
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = []

  // Creación de un Subject para notificar cambios en las tareas
  taskChanged = new Subject<Task[]>()

  constructor() {
    this.getTasks()
  }

  getTasks(): Task[] {
    this.getFromLocalStorage()
    return this.tasks
  }

  addTask(task: Task): void {
    this.tasks.push(task)
    this.setLocalStorage()
    // Notificar a los suscriptores que las tareas han cambiado
    this.taskChanged.next(this.tasks.slice())
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id)
    this.setLocalStorage()
    this.taskChanged.next(this.tasks.slice())
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id)
    if (task) {
      task.completed = !task.completed
      this.setLocalStorage()
      this.taskChanged.next(this.tasks.slice())
    }
  }

  getFromLocalStorage(): void {
    if (typeof localStorage !== 'undefined') {
      const savedTasks = localStorage.getItem('tasks')
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks)
        this.taskChanged.next(this.tasks.slice())
      }
    }
  }

  setLocalStorage(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
}
