import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';

@Injectable({
  // Esto indica que el servicio está disponible en toda la aplicación
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = []

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
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id)
     this.setLocalStorage()
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id)
    if (task) {
      task.completed = !task.completed
      this.setLocalStorage()
    }
  }

  getFromLocalStorage(): void {
    if (typeof localStorage !== 'undefined') {
      const savedTasks = localStorage.getItem('tasks')
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks)
      }
    }
  }

  setLocalStorage(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
}
